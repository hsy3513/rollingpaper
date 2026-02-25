import './ProfileHeader.css';

interface ProfileHeaderProps {
    name: string;
    description: string;
}

function ProfileHeader({ name, description }: ProfileHeaderProps) {
    return (
        <section className="profile-header" id="profile-header">
            <div className="profile-header__inner">
                <div className="profile-header__avatar">
                    <svg
                        className="profile-header__avatar-icon"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="24" cy="18" r="8" stroke="currentColor" strokeWidth="2.5" fill="none" />
                        <path
                            d="M8 40c0-8.837 7.163-16 16-16s16 7.163 16 16"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            fill="none"
                            strokeLinecap="round"
                        />
                    </svg>
                </div>
                <div className="profile-header__info">
                    <h1 className="profile-header__name">{name}</h1>
                    <span className="profile-header__badge">롤링페이퍼</span>
                </div>
            </div>
            <p className="profile-header__description">
                {description}
            </p>
        </section>
    );
}

export default ProfileHeader;
