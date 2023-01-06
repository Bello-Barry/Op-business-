function Footer() {
  return (

    <div class="bg-dark text-center text-white">
  <div class="container p-4">
    <section class="mb-4">
      <a class="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/Entrpreneuriat2.0" role="button"
      ><i class="bi bi-facebook"></i
      ></a>
      <a class="btn btn-outline-light btn-floating m-1" href="https://twitter.com/starkingbarry" role="button"
      ><i class="bi bi-twitter"></i
      ></a>
      <a class="btn btn-outline-light btn-floating m-1" href="https://l.facebook.com/l.php?u=https%3A%2F%2Fopbusines.blogspot.com%2F%3Fm%3D1%26fbclid%3DIwAR1Hip02SSrPU64__50ugmaMqJNBdpe-gB6CjXmcROBydI3Un0tuIoA7Bv4&h=AT3ECVwbwNfbVL9xKvBxM7SrAK7BE3Szer3FkdSkqAbF5f4EuBfvBCk8varno660AW116szSnzt8o9Km7i4kMyQX55ieqhBwbUtIf9iyxGpFS6UZUuD4fXflyqQcxCZ5npeDeg" role="button"
      ><i class="bi bi-google"></i
      ></a>
      <a class="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/op_et_busines/" role="button"
      ><i class="bi bi-instagram"></i></a>
      <a class="btn btn-outline-light btn-floating m-1" href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fbello-barry-13838b106%3Ffbclid%3DIwAR2znzQIw6TkUjrVOX0dIHIJfrsazyVArQx0wdLCqyeTRn7EcSPywVCaF6w&h=AT0OSq7SBATwLACezcXAwAMbYMulTszuNB3d_J8QjFOMtpeTmDk0-zaaRUU5exjS5A-o_EY4XBKnXb2PTwOyLL9lXScnDAKCt3j6KyFApaW5nDbc9Kq0LT7bFAMDWd9h1Jqf&__tn__=R]-R&c[0]=AT351jRyp6SgbY7YBvgeDUH736e_qv-GSYjWmTrfvwhL5C0i5S2jPjTLyeJmMbXEIw3yc__tqoNG0eI6-d3E4zwr_dFhoALG7jMts1-z-OL4oklsllY1yahSzTxJkMDm4kuhTR1k___ia7k3XAuweSOdpkyG8YYNoZ_-F54pPrhGcxDERDW8wXnyh0o-I3TPqREgYKg9Hp_0" role="button"
      ><i class="bi bi-linkedin"></i
      ></a>
      <a class="btn btn-outline-light btn-floating m-1" href="https://github.com/Bello-Barry" role="button"
      ><i class="bi bi-github"></i></a>
    </section>
      <h3 className="text-center lead " style={ { backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
    © 2022 Copyright: BUSiNESS
    </h3>
    </div>
    </div>


  )
}
function About( {
  titre, contenu
}) {
  return(<div>
    <h1>{titre}</h1>
    <p>

    <small>
    {contenu}
    </small>
  </p>
  </div>
  )
}
function Liste() {
  return(
    <div>
    <ul>
      <li>création de site web</li>
      <li>création du contenu numérique</li>
      <li>Web marketing </li>
    </ul>
    </div>
  )
}



function App() {
  return (
    <div>
    <About titre="bienvenue " contenu="nous sommes une agence numérique spécialisée dans :" />
    <Liste />
    <Footer />
    </div>
  )
}

const element = <App />;
ReactDOM.render(
  element,
  document.getElementById('roote')
);