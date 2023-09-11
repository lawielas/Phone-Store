import iphone from "../assets/images/iphone.jpg"
import laptop from "../assets/images/laptop 2.jpeg"
import mac from "../assets/images/mac.jpg"

export const Products = () => {
    return (
        <div className="flex flex-col sm:flex-row justify-around items-center py-10">
            <div className="text-lg text-slate-400 flex flex-col items-center py-5">
                <img src={iphone} alt="iphone" className="w-72 h-52"/>
                <p>Iphone</p>
                <p>14</p>
                <p className="text-black">expensive</p>
            </div>
            <div className="text-lg text-slate-400 flex flex-col items-center py-5">
                <img src={laptop} alt="iphone" className="w-72 h-52"/>
                <p>Laptop</p>
                <p>good one</p>
                <p className="text-black">affordable</p>
            </div>
            <div className="text-lg text-slate-400 flex flex-col items-center py-5">
                <img src={mac} alt="iphone" className="w-72 h-52"/>
                <p>Mac</p>
                <p>latest</p>
                <p className="text-black"> very expensive</p>
            </div>
        </div>
    )
}