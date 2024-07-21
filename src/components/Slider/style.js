import { styled }  from "styled-components";

export const Container = styled.div`
    padding: 0 1.25rem;
    overflow: hidden;
    background: linear-gradient(0deg, rgba(0,0,0,0.9668242296918768) 42%, rgba(129,127,127,0.908000700280112) 98%)

    h2 {
        font-size: 1.75rem;
        color: #fff;
        margin: 3,12rem 0 1.25rem 1,25rem;
    }

    @media(max-width: 850px){
      padding: 0 0.5rem;

      h2 {
        font-size: 1rem;
        color: #fff;
        margin: 1rem;
      }
  }

  .swiper-wrapper {
    display: flex;
    gap: 0.6rem;
  }
`
