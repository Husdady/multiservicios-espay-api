'use strict'

// Librarys
const {
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLString,
  GraphQLBoolean,
} = require('graphql')

// Models
const Products = require('@models/products/Product')
const Categories = require('@models/products/Category')

// Typedefs
const { ProductTypedef, ProductFiltersTypedef, ProductTableTypedef } = require('@graphql/typedefs/products/Product.Typedef')

// Utils
const { setArguments } = require("@utils/Helper");
const {
  paginate,
  getLastest,
  randomizeProducts,
  setProductsFilters,
} = require("@utils/Pagination");

// Product Query
const product = {
  type: ProductTypedef,
  args: setArguments({
    _id: GraphQLID,
    name: GraphQLString,
  }),
  resolve(_, args) {
    try {
      const config = {}

      if (args._id) {
        config._id = args._id
      }

      if (args.name) {
        config.name = {
          $regex: new RegExp(args.name.replace(/\W/g, '\\$&'), "gi"),
        }
      }

      // Aumentar número de visitas del producto
      const update = {
        $inc: {
          totalVisits: 1
      }}

      // Configuración extra
      const extraConfig = {
        new: true,
      }

      return Products.findOneAndUpdate(config, update, extraConfig)
        .populate("categories")
        .lean();
    } catch (err) {
      console.error('[Product.query]', err)
    }
  },
}

// Products Query
const products = {
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

      // Si se deben obtener los últimos productos
      if (getLastestProducts) {
        return getLastest({
          limit: limit,
          model: Products,
        });
      }

      // Si se deben obtener los productos aleatoriamente
      if (getAleatoryProducts) {
        const aleatoryProducts = await randomizeProducts({
          limit: limit,
          Model: Products,
          productToExclude: filters.name,
        })

        return aleatoryProducts;
      }

      // Si se debe paginar los productos
      if (pagination) {
        // Obtener filtros de productos
        const productsFilters = setProductsFilters(filters);

        // Paginar productos
        const productsPaginated = await paginate({
          skip: skip,
          limit: limit,
          filters: productsFilters,
          sortBy: filters.sortBy,
          model: Products,
        });
        
        return productsPaginated;
      }

      // Retornar productos
      return Products.find({}).populate("categories").lean();
    } catch (err) {
      console.error('[Products.query]', err)
    }
  },
}

// Products pagination for table
const products_in_table = {
  type: ProductTableTypedef,
  args: setArguments({
    skip: GraphQLInt,
    limit: GraphQLInt,
    pagination: GraphQLBoolean,
    filters: ProductFiltersTypedef,
  }),
  async resolve(_, args) {
    try {
      const { skip, limit, filters, pagination } = args;

      // Si la paginación no está habilitada
      if (!pagination) return Products.find({}).populate("categories").lean();

      // Obtener filtros de productos
      const productsFilters = setProductsFilters(filters);

      // Paginar productos
      const productsPaginated = await paginate({
        filters: productsFilters,
        model: Products,
        extraFields: {
          $lookup: {
            from: Categories.collection.name,
            localField: "categories",
            foreignField: "_id",
            as: "categories",
          },
          $facet: {
            count: [{ $count: 'count' }],
            items: [{ $sort: filters.sortBy }, { $skip: skip }, { $limit: limit }],
          },
          $project: {
            count: { $arrayElemAt: ["$count.count", 0] },
            items: "$items",
          },
        }
      });

      return productsPaginated[0];
    } catch(err) {
      console.error('[ProductsInTable.query]', err)
    }
  }
}

module.exports = {
  product,
  products,
  products_in_table,
}
