import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (

            <div>My posts
                <div>
                    <textarea name="" id="" cols="10" rows="10"></textarea>
                    <button>Add post</button>
                </div>
                <div className={s.posts}>
                    <Post message='Hi, how are you?' likeCount='54'/>
                    <Post message="It's my first post" likeCount='2'/>
                </div>
            </div>

    );
}

export default MyPosts;