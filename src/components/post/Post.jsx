import "./post.css";

export default function Post() {
    return (
        <div className="post">
            <img className="postImg"
                src="https://media.istockphoto.com/id/1405417165/photo/happy-teenager-in-the-studio.jpg?s=612x612&w=0&k=20&c=MIjlkj_qkv-Iek3UaSUuYOfHJxEIHZbvXS9ZtUUORzQ=" alt="" srcset="" />
            <div className="postInfo">
                <div className="postCats">
                    <div className="postCat">Glow</div>
                    <div className="postCat">Shinny</div>
                </div>
                <span className="postTitle">
                Don’t touch the face
                </span>
                <hr/>
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
            This isn't about bumps and popping pimples, which is obviously a huge no-no since it can cause scarring, infections, and dark spots. It means any touching — like resting your chin in your hand while you listen to your date talk about something you already forget, or tapping your fingers on your forehead trying to remember where you put your phone. You're probably touching your face right now. According to New York dermatologist Melissa Kanchanapoomi Levin, clinical instructor at Mount Sinai Icahn School of Medicine, this mindless bad habit can transfer bacteria to your skin. Cue the breakouts and clogged pores.
            </p>


        </div>
    )
}