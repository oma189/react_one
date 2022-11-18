import  "./singlePost.css";



export default function SinglePost(){
    return(
        <div className="singlePost">
           <div className="singlePostWrapper">
            <img src="https://media.istockphoto.com/id/1369564373/photo/beautiful-black-woman-beauty-portrait-of-african-american-woman-with-clean-healthy-skin-on.jpg?s=612x612&w=0&k=20&c=-rGHBksaXu-0F5KDHP2MhET92_sPLyTDvT1OPA2HO9Y=" alt="" className="singlePostImg" />
            <h1 className="singlePostTitle">
                Lorem ipsum, dolor sit amet 
                <div className="singlePostEdit">
                    <i className="singlePostIcon far fa-edit"></i>
                    <i className="singlePostIcon far fa-trash-alt"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>Oluoma</b></span>
                <span className="singlePostDate"> 2 hours ago</span>
            </div>
            <p className="singlePostDesc">
            Sunscreen is something you need right this minute. For one thing, you don't want a Rudolph-style nose if you're out in the sun all day. But it's not just about looking better (or preventing skin cancer — which is a major argument for daily SPF), the sun's rays also dry out your skin. Sun protection is just as crucial on a daily basis as it is on the beach. “Wearing daily sunscreen without fail, even in winter, will prevent accelerated aging, rough spots, and different growths,” says Dr. Levin. Aim to apply a full shot glass of SPF from head to toe when you’re at the beach and one-quarter teaspoon just for your face on a daily basis.
            </p>
           </div>
        </div>
    )
}