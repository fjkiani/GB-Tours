import React from "react"
import Image from "gatsby-image"
import Title from "../Title"
import css from "../css/tour.module.css"
import { FaMap } from "react-icons/fa"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import PropTypes from "prop-types"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"


function Tour({tour:data,title}) {
    
    //data gets passed to tour variable
    const [tour, setTour] = React.useState(data);

    // console.log(data)

    // const mainImage = item.data.image.localFiles[0].childImageSharp.fluid


    return (
       <Wrapper className="section">
       <Title title={title}/>

       </Wrapper>
    )
}

export default Tour




const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .section-center {
    margin-top: 4rem;
    max-width: var(--max-width);
    display: grid;
    gap: 2rem;
    /* safari workaround */
    grid-gap: 2rem;
    .img {
      height: 20rem;
      border-radius: var(--radius);
      transition: var(--transition);
    }
    article {
      box-shadow: var(--light-shadow);
      border-radius: var(--radius);
      transition: var(--transition);
    }
    article:hover {
      box-shadow: var(--dark-shadow);
    }
    .container {
      position: relative;
      overflow: hidden;
      border-radius: var(--radius);
      background: var(--clr-primary-7);
      &:hover .img {
        opacity: 0.2;
      }
      .info {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        opacity: 0;
        transition: var(--transition);
        color: var(--clr-white);
        text-align: center;
        p {
          margin-bottom: 0.5rem;
          color: var(--clr-white);
          text-transform: uppercase;
        }
      }
      &:hover .info {
        opacity: 1;
      }
    }
    @media (min-width: 768px) {
      .img {
        height: 15rem;
      }
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 992px) {
      .img {
        height: 12.5rem;
      }
      grid-template-columns: 1fr 1fr 1fr;
    }
    @media (min-width: 1200px) {
      .img {
        height: 15rem;
      }
    }
  }
  a {
    display: block;
    width: 9rem;
    text-align: center;
    margin: 0 auto;
    margin-top: 3rem;
  }
`