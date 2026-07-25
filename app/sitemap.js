import connectDB from "@/lib/mongodb";

import Service from "@/models/Service";
import Product from "@/models/Product";
import Category from "@/models/Category";
import Blog from "@/models/Blog";
import Project from "@/models/Project";


// refresh sitemap every hour
export const revalidate = 3600;



export default async function sitemap() {

  try {


    const baseUrl = "https://poolcaptain.pk";


    await connectDB();



    // ---------------------------------
    // STATIC PAGES
    // ---------------------------------

    const staticPages = [

      "",
      "/about",
      "/pool-services",
      "/pool-products",
      "/contact",
      "/gallery",
      "/blogs",
      "/downloads",
      "/projects",
      "/pool-volume-calculator",

    ];



    const staticUrls = staticPages.map((path)=>({

      url:`${baseUrl}${path}`,

      lastModified:new Date(),

      changeFrequency:"monthly",

      priority:path === "" ? 1 : 0.7

    }));







    // ---------------------------------
    // SERVICES
    // ---------------------------------

    const services = await Service.find(
      {},
      {
        slug:1,
        updatedAt:1
      }
    ).lean();



    const serviceUrls = services.map((service)=>({

      url:
      `${baseUrl}/pool-services/${service.slug}`,

      lastModified:
      service.updatedAt || new Date(),

      changeFrequency:"monthly",

      priority:0.9

    }));









    // ---------------------------------
    // PROJECTS
    // ---------------------------------

    const projects = await Project.find(
      {},
      {
        slug:1,
        updatedAt:1
      }
    ).lean();



    const projectUrls = projects.map((project)=>({

      url:
      `${baseUrl}/projects/${project.slug}`,

      lastModified:
      project.updatedAt || new Date(),

      changeFrequency:"monthly",

      priority:0.8

    }));










    // ---------------------------------
    // BLOGS
    // ---------------------------------

    const blogs = await Blog.find(
      {},
      {
        slug:1,
        updatedAt:1
      }
    ).lean();



    const blogUrls = blogs.map((blog)=>({

      url:
      `${baseUrl}/blogs/${blog.slug}`,

      lastModified:
      blog.updatedAt || new Date(),

      changeFrequency:"weekly",

      priority:0.8

    }));









    // ---------------------------------
    // PRODUCT CATEGORIES
    // ---------------------------------

    const categories = await Category.find(
      {},
      {
        slug:1,
        updatedAt:1
      }
    ).lean();



    const categoryUrls = categories.map((category)=>({

      url:
      `${baseUrl}/pool-products/${category.slug}`,

      lastModified:
      category.updatedAt || new Date(),

      changeFrequency:"monthly",

      priority:0.7

    }));










    // ---------------------------------
    // PRODUCTS
    // ---------------------------------

    const products = await Product.find(
      {},
      {
        slug:1,
        category:1,
        updatedAt:1
      }
    ).lean();





    const productUrls = products.map((product)=>{


      let categorySlug = product.category;



      // if category is object
      if(
        typeof product.category === "object" &&
        product.category !== null
      ){

        categorySlug =
        product.category.slug;

      }




      return {

        url:
        `${baseUrl}/pool-products/${categorySlug}/${product.slug}`,

        lastModified:
        product.updatedAt || new Date(),

        changeFrequency:"monthly",

        priority:0.7

      };


    });










    // ---------------------------------
    // FINAL SITEMAP
    // ---------------------------------

    return [

      ...staticUrls,

      ...serviceUrls,

      ...projectUrls,

      ...blogUrls,

      ...categoryUrls,

      ...productUrls,

    ];



  }

  catch(error){


    console.error(
      "SITEMAP ERROR:",
      error
    );


    return [];


  }


}