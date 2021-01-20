import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <img src="https://alpindustria.ru/i/tour/programms/596_1800.jpg" alt=""/>
            <div>ava+description</div>
            <MyPosts/>
        </div>
    );
}

export default Profile;