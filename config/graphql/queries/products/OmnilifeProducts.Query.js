'use strict'

// Librarys
const {
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLString,
  GraphQLBoolean,
  GraphQLInputObjectType,
} = require('graphql')

// Models
const { OmnilifeOrders } = require('@models/products/Order')
const { OmnilifeProducts } = require('@models/products/Product')
const { OmnilifeCategories } = require('@models/products/Category')

// Typedefs
const {
  CategoryTypedef,
  ProductTypedef,
  ProductOrderTypedef,
  ProductFiltersTypedef
} = require('@graphql/typedefs/products')

// Utils
const Pagination = require("@utils/Pagination");
const { setArguments } = require("@utils/Helper");

// Omnilife Categoru Query
const omnilife_category = {
  type: CategoryTypedef,
  args: setArguments({
    name: GraphQLString
  }),
  async resolve(_, args) {
    try {
      const omnilifeCategory = await OmnilifeCategories.findOne(args).lean()

      return omnilifeCategory
    } catch (err) {
      console.error('[OmnilifeProductsQuery.category]', err)
    }
  },
}

// Omnilife Categories Query
const omnilife_categories = {
  type: new GraphQLList(CategoryTypedef),
  async resolve(_, args) {
    try {
      const omnilifeCategory = await OmnilifeCategories.find(args).lean()

      return omnilifeCategory
    } catch (err) {
      console.error('[OmnilifeProductsQuery.category]', err)
    }
  },
}

// Omnilife Product Query
const omnilife_product = {
  type: ProductTypedef,
  args: setArguments({
    _id: GraphQLID,
    name: GraphQLString,
  }),
  async resolve(_, args) {
    try {
      const config = {}

      if (args._id) {
        config._id = args._id
      }

      if (args.name) {
        config.title = {
          $regex: new RegExp(args.name.replace(/\+/gi, "\\+"), "gi"),
        }
      }

      const omnilifeProduct = await OmnilifeProducts.findOne(config)
        .populate("categories")
        .lean()

      return omnilifeProduct;
    } catch (err) {
      console.error('[OmnilifeProductsQuery.product]', err)
    }
  },
}

// Omnilife Products Query
const omnilife_products = {
  type: new GraphQLList(ProductTypedef),
  args: setArguments({
    skip: GraphQLInt,
    limit: GraphQLInt,
    pagination: GraphQLBoolean,
    getLastestProducts: GraphQLBoolean,
    getAleatoryProducts: GraphQLBoolean,
    filters: ProductFiltersTypedef,
  }),
  async resolve(_, args) {
    try {
      const {
        skip,
        limit,
        filters,
        pagination,
        getLastestProducts,
        getAleatoryProducts,
      } = args;

      // Si se deben obtener los últimos productos Omnilife
      if (getLastestProducts) {
        const lastestOmnilifeProducts = await Pagination.getLastestItems(OmnilifeProducts, limit)

        return lastestOmnilifeProducts;
      }

      // Si se deben obtener los productos Omnilife aleatoriamente
      if (getAleatoryProducts) {
        const aleatoryOmnilifeProducts = await Pagination.getAleatoryProducts({
          limit: limit,
          Model: OmnilifeProducts,
          productToExclude: filters.title,
        })

        return aleatoryOmnilifeProducts;
      }

      // Si se debe paginar los productos Omnilife
      if (pagination) {
        const config = {
          skip: 0,
          limit: 40,
          model: OmnilifeProducts,
          filters: {}
        }

        if (skip) config.skip = skip;
        if (limit) config.limit = limit;
        if (filters) {
          if (filters.title) {
            Object.assign(config.filters, {
              title: {
                $options: "i",
                $regex: filters.title,
              }
            })
          }

          if (filters.categories) {
            Object.assign(config.filters, {
              categories: {
                $in: filters.categories,
              }
            })
          }
        }

        const paginateOmnilifeProducts = await paginate(config).populate("categories")

        return paginateOmnilifeProducts;
      }
      
      const omnilifeProducts = await OmnilifeProducts.find(args)
        .populate("categories")
        .lean()

      return omnilifeProducts;
    } catch (err) {
      console.error('[OmnilifeProductsQuery.products]', err)
    }
  },
}

// Omnilife Order Query
const omnilife_order = {
  type: ProductOrderTypedef,
  args: setArguments({
    clientId: GraphQLString,
  }),
  async resolve(_, args) {
    try {
      const omnilifeOrder = await OmnilifeOrders.findOne(args)
        .populate("products.product")
        .lean()

      return omnilifeOrder
    } catch (err) {
      console.error('[OmnilifeProductsQuery.order]', err)
    }
  },
}

// Omnilife Orders Query
const omnilife_orders = {
  type: new GraphQLList(ProductOrderTypedef),
  args: setArguments({
    clientId: GraphQLString,
  }),
  async resolve(_, args) {
    try {
      const omnilifeOrders = await OmnilifeOrders.find(args)
        .populate("products.product")
        .lean()

      return omnilifeOrders;
    } catch (err) {
      console.error('[OmnilifeProductsQuery.orders]', err)
    }
  },
}

module.exports = {
  omnilife_order,
  omnilife_orders,
  omnilife_product,
  omnilife_products,
  omnilife_category,
  omnilife_categories,
}
