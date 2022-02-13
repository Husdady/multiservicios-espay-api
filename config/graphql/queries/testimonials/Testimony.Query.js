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
const Pagination = require("@utils/Pagination");
const { setArguments } = require("@utils/Helper");

const author_testimony = {
  type: TestimonyTypedef,
  args: setArguments({
    name: GraphQLString
  }),
  async resolve(_, args) {
    try {
      const testimony = await Testimonials.findOne({
        'author.short_name': args.name
      }).lean()

      return testimony;
    } catch (err) {
      console.error('[TestimonyQuery.testimony]', err)
    }
  },
}

const testimonials = {
  type: new GraphQLList(TestimonyTypedef),
  args: setArguments({
    skip: GraphQLInt,
    limit: GraphQLInt,
    pagination: GraphQLBoolean,
    getLastestTestimonials: GraphQLBoolean,
  }),
  async resolve(_, args) {
    const { skip, limit, pagination, getLastestTestimonials } = args;

    try {
      if (pagination && getLastestTestimonials) return null;

      // Si se deben obtener los últimos testimonios Omnilife
      if (getLastestTestimonials) {
        const lastestTestimonials = await Pagination.getLastestItems(Testimonials, limit);

        return lastestTestimonials;
      }

      // Si se debe paginar los testimonios
      if (pagination) {
        const paginatedTestimonials = await Pagination.paginate({
          skip: skip || 0,
          limit: limit || 6,
          model: Testimonials,
        })

        return paginatedTestimonials;
      }

      const testimonialsFound = await Testimonials.find(args).lean()
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
