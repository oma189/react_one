import "./sidebar.css";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="siderbarItem">
                <span className="sidebarTitle">About me</span>
                <img className="sidebarTitleImg" src="https://media.istockphoto.com/id/1426036493/photo/clean-skincare-face-bald-black-woman-and-cancer-beauty-model-with-body-jewelry-portrait-of.jpg?s=612x612&w=0&k=20&c=kGfKAzin-kIGq_PU4q66n7LHid2anNsbOEUnlJ6puuo=" alt="" srcset="" />
                <p>
                The GH Beauty Lab thoroughly evaluates skincare products using technical Lab instruments and consumer feedback. In the Lab, our scientists use devices that evaluate skin's hydration levels, firmness and the appearance of wrinkles, dark spots and pores, both before and after use of a formula. They also distribute the products to consumer testers, who evaluate them on ease of use and the look and feel of their skin after a set time period. Then these data points are culled together to determine the best skincare products you can buy, from face cleansers to moisturizers, serums, eye creams, sunscreens and more.

                To put together this definitive list of the best skincare products of all time, we consulted dermatologists to ask about their favorite brands and formulas, and included those recommendations alongside the GH Beauty Lab's top-tested skincare products across categories.
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Glow </li>
                    <li className="sidebarListItem">Smoothe</li>
                    <li className="sidebarListItem">shinny</li>
                    <li className="sidebarListItem">Rich</li>
                    <li className="sidebarListItem"> Healthy </li>
                    <li className="sidebarListItem">Spotless</li>


                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Follow Us</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    )
}