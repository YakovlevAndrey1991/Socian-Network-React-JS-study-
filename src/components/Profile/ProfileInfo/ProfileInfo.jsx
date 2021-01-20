import s from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://alpindustria.ru/i/tour/programms/596_1800.jpg" alt=""/>
                <div className={s.descriptionBlock}>ava+description</div>
            </div>
        </div>
    );
}

export default ProfileInfo;