import React from 'react'
import { graphql } from "gatsby"


export default function Template({data}) {
  return (
    <div>
      {data.tour.name}</div>
  )
}

export const query = graphql`
query($slug: String) {
  airtable(data: {slug: {eq: $slug}}) {
   data {
     price
     }
   }
 }



      `