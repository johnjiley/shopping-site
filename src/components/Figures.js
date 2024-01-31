import Figure from "react-bootstrap/Figure";

function FigureExample() {
  return (
    <Figure>
      {/* <img className="man" src="baby.jpg" alt=" " /> */}
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src="holder.js/171x180"
      />
      <Figure.Caption>
        Hi, welcome to our e-commerce store. We are a team of passionate parents
        who want to provide the best products for your baby. We know how
        important it is to choose quality, safety and comfort for your little
        ones, and that’s why we carefully select our products from trusted
        brands and suppliers. We offer a wide range of baby products, from
        clothing and toys to care and feeding items. Whether you are looking for
        a gift for a new arrival, or something special for your own baby, we
        have it all. We started our store in 2021, after realizing that there
        was a gap in the market for affordable and convenient baby products. We
        wanted to create a one-stop shop for busy parents who don’t have time to
        browse through multiple websites or visit physical stores. With our
        easy-to-use website, fast delivery and friendly customer service, we aim
        to make your shopping experience as smooth and enjoyable as possible. We
        are more than just a store, we are a com
      </Figure.Caption>
    </Figure>
  );
}

export default FigureExample;
