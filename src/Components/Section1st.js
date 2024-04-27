import React from "react";
import '../css/Section1st.css'
import adriatic from '../img/AdriaticRestaurant.png'
import alfa from '../img/Alfa.png'
import CRUDS from '../img/CRUDS.png'
import Iphone from '../img/Iphone.png'
import moveIt from '../img/moveIt.png'
import andMore from '../img/more.png'




const Section1st = () => {
    return (
        <div className="mt-5 moreOptionSection">
            <div className="row justify-content-center ">
                <div class="card col-12 col-lg-4 m-1">
                    <img src={adriatic} class="card-img-top" alt={'adriatic'} />
                    <div class=" cardBody text-light">
                        <h5 class="card-title">Adriatic Restaurant</h5>
                    </div>
                </div>
                <div class="card col-12 col-lg-4 m-1">
                    <img src={alfa} class="card-img-top" alt={'alfa'} />
                    <div class=" cardBody text-light">
                        <h5 class="card-title">Alfa Turizm</h5>
                    </div>
                </div>
                <div class="card col-12 col-lg-4 m-1">
                    <img src={moveIt} class="card-img-top" alt={'moveIt'} />
                    <div class=" cardBody text-light">
                        <h5 class="card-title">moveIt</h5>
                        <p>project for shipping company</p>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center ">
                <div class="card col-12 col-lg-4 m-1">
                    <img src={CRUDS} class="card-img-top" alt={'CRUDS'} />
                    <div class=" cardBody text-light">
                        <h5 class="card-title">CRUDS project</h5>
                    </div>
                </div>
                <div class="card col-12 col-lg-4 m-1">
                    <img src={Iphone} class="card-img-top" alt={'Iphone'} />
                    <div class=" cardBody text-light">
                        <h5 class="card-title">basic project copy of iphone</h5>
                    </div>
                </div>
                <div class="card col-12 col-lg-4 m-1">
                    <img src={andMore} class="card-img-top" alt={'andMore'} />
                    <div class=" cardBody text-light">
                        <h5 class="card-title">for more info</h5>
                        <a href="#">please contact me</a>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Section1st