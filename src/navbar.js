

export const navbar = (element) => {
  
   
   const navbar = document.createElement('div')
    navbar.innerHTML= `<nav class="navbar navbar-expand-lg  bg-primary navbar-dark nav-bar justify-content-center">
    <a class="navbar-brand" href="#"> <i class="fas fa-utensils d-inline-block  align-top" width="30" height="30"></i> <span class="logo-text">Eat<span class="me">.Me</span></span>
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
    <div class="collapse navbar-collapse flex-grow-0" id="navbarNav">
        <ul class="navbar-nav ">
            <li class="nav-item active">
                <a class="nav-link ml-5 mr-5" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link ml-5 mr-5" href="#">Best Reviews</a>
            </li>
            <li class="nav-item ml-5 mr-5">
                <a class="nav-link " href="#">top rated </a>
            </li>
            <li class="nav-item ml-5 mr-5">
                <a class="nav-link " href="#">Contact</a>
            </li>

        </ul>
    </div>
</nav>
`
  element.appendChild(navbar)
}