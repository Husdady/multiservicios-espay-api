'use strict'

// Librarys
const { GraphQLList, GraphQLString } = require('graphql')

// Models
const Testimony = require('@models/testimonials/Testimony')

// Typedefs
const TestimonyTypedef = require('@graphql/typedefs/testimonials/Testimony.Typedef')

const author_testimony = {
  type: TestimonyTypedef,
  args: {
    author: {
      name: 'author',
      type: GraphQLString,
    },
  },
  async resolve(_, args) {
    try {
      // { 'author.name': args.author }
      // const testimony = await Testimony.findOne({ 'author.name': new RegExp('^' + args.author + '$', 'i') }, function (err, doc) {
      //   if (err) return

      //   console.log('[doc]', doc)
      // })

      const testimony = await Testimony.findOne({
        'author.name': new RegExp(args.author, 'i')
      })
      console.log(testimony)
      return testimony
    } catch (err) {
      console.error('[TestimonyQuery.testimony]', err)
    }
  },
}

const testimonials = {
  type: new GraphQLList(TestimonyTypedef),
  async resolve(_, args) {
    try {
      const testimonialsFound = await Testimony.find(args)
      return testimonialsFound
    } catch (err) {
      console.error('[TestimonyQuery.testimonials]', err)
    }
  },
}

module.exports = {
  author_testimony,
  testimonials,
}
