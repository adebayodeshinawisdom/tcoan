import React from 'react'

const Footer = () => {
  return (
    <div>
       <footer style={{height: "700px", width: "100%", backgroundColor: "brown"}} >
        <br/>
        <br/>
        <br/>
        <div class="container">
            <div class="row">

                <div class="col-4" style={{color: "white"}}>
                    <h5>The Temple Church Of All Nations</h5>
                    <p> <i class="fa fa-map-marker"></i> Veldman Ave, Hans Coverdale Rd Eersterust. Pretoria, South Africa 0001</p>
                    <p><i class="fa fa-phone"></i> +27639172279</p>
                    <p> <i class="fa fa-envelope"></i> tcoan.org@gmail.com</p>
                    
                </div>
                <div class="col-4" style={{color: "white"}}>
                    <h4>Useful Links</h4>
                    <ul>
                        <li style={{listStyleType: "square"}}><a style={{color: "white", textDecoration: "none"}} href="/">Home</a> </li>
                        <li style={{listStyleType: "square"}}><a style={{color: "white", textDecoration: "none"}} href="/about">About Us</a> </li>
                        <li style={{listStyleType: "square"}}><a style={{color: "white", textDecoration: "none"}} href="/prayerrequest">Prayer Request</a> </li>
                        <li style={{listStyleType: "square"}}><a style={{color: "white", textDecoration: "none"}} href="/contact">Contact Us</a> </li>


                    </ul>
                </div>
                <div class="col">
                    <h4 style={{color: "white"}}></h4>
                    

                </div>
                <div class="col" style={{color: "white"}}>
                
                </div>
                <div class="col-4">
                    <a href="https://www.facebook.com/A.J.RufusMinistries/"><img style={{width: "50px", height: "50px"}} src="/images/facebook.png"/></a>
                    <a href="https://www.instagram.com/a.j.rufus_ministries"><img style={{width: "50px", height: "50px"}} src="/images/instagram.jpg"/></a>
                    <a href="https://pin.it/7MmBlMN"><img style={{width: "50px", height: "50px"}} src="/images/Pinterest-icon.png"/></a>
                    <a href="https://twitter.com/rufusjacob6?t=ENqPnJNm2RIdp3SM_9J6qw&s=09"><img style={{width: "50px", height: "50px"}} src="/images/Twitter-featured.png"/></a>
                    <a href="https://youtube.com/channel/UCdKhL9BfCk-PochPLjgVqOQ"><img style={{width: "70px", height: "50px"}} src="/images/Youtube-logo.png"/></a>
                    <a href="https://www.tiktok.com/@ajrufus?_t=8cYY5vHwVPS&_r=1"><img style={{width: "70px", height: "50px"}} src="/images/tiktok.png"/></a>
                </div>
                <div class="col"></div>








            </div>


            <p class="text-center" style={{color: "white"}}>&copy; All Rights Reserved | Tcoan 2023</p>

        </div>



   </footer>

    </div>
  )
}

export default Footer
