export default function AboutSection({bg, textColor, height}) 
{
    return (
    <section id="apropos" className={`${bg} ${textColor} d-flex flex-column align-items-center justify-content-center`} style={{ scrollMarginTop: `${height}px`
    }}>
      <h1>A propos</h1>

    <div className="d-flex align-items-center justify-content-center w-100" style={{ gap: "1rem" }}>
    <hr className="border-primary border-3 w-25" />
    <div className="rounded-circle bg-primary" style={{ width: "10px", height: "10px", margin: "0 0.5rem" }}></div>
    <hr className="border-primary border-3 w-25" />
    </div>

    <div className="container bg-secondary d-flex flex-column align-items-center justify-content-center py-5">

      <p className="text-justify my-5">

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra pharetra bibendum. 
        Sed varius, lorem id euismod ullamcorper, erat nisl viverra nibh, vitae consectetur arcu nisl in ipsum. 
        Donec finibus est quis ante congue, at lacinia dui eleifend. Sed arcu ex, varius nec ex non, efficitur eleifend dui. 
        Ut id fringilla diam. Praesent sit amet accumsan massa, ut venenatis diam. Maecenas sagittis ornare fermentum. 
        Aenean sagittis consectetur laoreet. Proin turpis tortor, condimentum at orci vitae, tincidunt vestibulum leo. </p>

        <button type="submit" className="btn btn-primary btn-lg mx-auto" style={{ width: "100px"}}>CV</button>
    </div>
    

      </section>
          );
}