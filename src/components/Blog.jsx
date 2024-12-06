import React from 'react'

const Blog = ({img, alt, title, text}) => {
    return (
        <article className="flex flex-col shadow-lg border-2 border-gray-200 rounded-lg my-4 px-4 lg:px-0">
        <div className="px-4 pt-4 pb-1">
          <img src={img} alt={alt} />
        </div>
        <div className="px-4 py-4">
          <p className="text-2xl font-bold py-2">
            {title}
          </p>
          <p className="opacity-50 py-2">
          {text}
          </p>
          <p className="font-bold py-2">READ MORE <i className="bi bi-arrow-right ml-2"></i></p>
        </div>
      </article>
    )
}

export default Blog