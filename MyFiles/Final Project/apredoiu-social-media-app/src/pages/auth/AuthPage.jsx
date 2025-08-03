import AuthForm from "./AuthForm";
import styles from './AuthPage.module.scss';

const AuthPage = () => {
    return <div className={styles.authPage}>
        <AuthForm/>
    </div>
}

export default AuthPage;