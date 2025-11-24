export default function SkillsSection({bg, textColor, height}) 
{
    return (
    <section id="competences" className={`${bg} ${textColor} d-flex align-items-center justify-content-center`} style={{ scrollMarginTop: `${height}px`
    }}>
    <div className="d-flex flex-column align-items-center gap-5">
    <h2>Compétences</h2>
    <div className="container bg-dark text-white">

      <p className="text-justify">

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra pharetra bibendum. 
        Sed varius, lorem id euismod ullamcorper, erat nisl viverra nibh, vitae consectetur arcu nisl in ipsum. 
        Donec finibus est quis ante congue, at lacinia dui eleifend. Sed arcu ex, varius nec ex non, efficitur eleifend dui. 
        Ut id fringilla diam. Praesent sit amet accumsan massa, ut venenatis diam. Maecenas sagittis ornare fermentum. 
        Aenean sagittis consectetur laoreet. Proin turpis tortor, condimentum at orci vitae, tincidunt vestibulum leo. </p>
    </div>
    
    </div>
      </section>
          );
}