'use strict'

// Librarys
const {
  GraphQLInt,
  GraphQLList,
  GraphQLString,
  GraphQLBoolean,
} = require('graphql')

// Models
const Testimonials = require('@models/testimonials/Testimony')

// Typedefs
const TestimonyTypedef = require('@graphql/typedefs/testimonials/Testimony.Typedef')

// Utils
const Helper = require("@utils/Helper");

const author_testimony = {
  type: TestimonyTypedef,
  args: Helper.setArguments({
    name: GraphQLString
  }),
  async resolve(_, args) {
    try {
      const testimony = await Testimonials.findOne({
        'author.short_name': args.name
      })

      return testimony
    } catch (err) {
      console.error('[TestimonyQuery.testimony]', err)
    }
  },
}

const testimonials = {
  type: new GraphQLList(TestimonyTypedef),
  args: Helper.setArguments({
    skip: GraphQLInt,
    limit: GraphQLInt,
    pagination: GraphQLBoolean,
    getLastestTestimonials: GraphQLBoolean,
  }),
  async resolve(_, args, context) {
    const { skip, limit, pagination, getLastestTestimonials } = args;

    try {
      if (pagination && getLastestTestimonials) {
        return null;
      }

      // Si se deben obtener los últimos testimonios Omnilife
      if (getLastestTestimonials) {
        const lastestTestimonials = await Helper.getLastestItems(Testimonials, limit);

        return lastestTestimonials;
      }

      // Si se debe paginar los testimonios
      if (pagination) {
        const paginatedTestimonials = await Helper.paginate({
          skip: skip,
          limit: limit,
          model: Testimonials,
        })

        return paginatedTestimonials;
      }

      const testimonialsFound = await Testimonials.find(args)
      return testimonialsFound;
    } catch (err) {
      console.error('[TestimonyQuery.testimonials]', err)
    }
  },
}

module.exports = {
  author_testimony,
  testimonials,
}
