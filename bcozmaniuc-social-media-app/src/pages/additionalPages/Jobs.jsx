import styles from './Jobs.module.scss';

import logoWebsite from '../../assets/purplelogo.png'
import StorefrontIcon from '@mui/icons-material/Storefront';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import WorkIcon from '@mui/icons-material/Work';
import BogdanPic from '../../assets/BogdanCozmaniuc.jpeg';

import Adecco from '../../assets/logosCompanies/adecco.jpg';
import Idrive from '../../assets/logosCompanies/iDrive.jpg';
import Logoc from '../../assets/logosCompanies/logoc.jpg';
import Mongo from '../../assets/logosCompanies/mongo.png';
import Nexer from '../../assets/logosCompanies/nexer.jpg';
import Pixeldata from '../../assets/logosCompanies/pixeldata.jpg';
import Raffall from '../../assets/logosCompanies/Raffall.jpg';
import Sigmasoftware from '../../assets/logosCompanies/Sigmasoftware.jpg';
import Unisoftwareplus from '../../assets/logosCompanies/unisoftwareplus.jpg';
import Xebia from '../../assets/logosCompanies/xebia.jpg';
import Xreacherlogo from '../../assets/logosCompanies/xreacherlogo.jpg';
import Zipper from '../../assets/logosCompanies/zipper.jpg';


const Jobs = () => {

    return (

        <div className={styles.mainContentPage}>

            <aside className={styles.sidebarLeft}>
                <div className={styles.containerProfileCard}>
                    <img className={styles.logoImage} src={logoWebsite} alt="" />
                    <div className={styles.logoUp}>MeetUp App</div>
                    <div className={styles.textTitle}>
                        <p><b></b></p>
                        <p>Social Networking</p>
                        <p>Collaborations</p>
                        <p>Achievements</p>
                    </div>


                    <div className={styles.profileCard}>
                        <img className={styles.avatar} src={BogdanPic} alt="" />
                        <h3>Bogdan Cozmaniuc</h3>
                        <hr className={styles.firstHr} />
                        <div className={styles.friendsAndGroup}>
                            <p><b>130</b> Friends</p>
                            <p><b>4</b> Groups</p>
                        </div>
                    </div>

                    <div className={styles.profileCard2}></div>
                </div>

                <div className={styles.featuresGrid}>
                    <div className={styles.featureItem}>
                        <a href="/Groups">
                            <span className={styles.icon}><Diversity2Icon /></span>
                            <span className={styles.label}>Groups</span>
                        </a>
                    </div>
                    <div className={styles.featureItem}>
                        <a href="/Blog">
                            <span className={styles.icon}><Diversity2Icon /></span>
                            <span className={styles.label}>Blog</span>
                        </a>
                    </div>
                    <div className={styles.featureItem}>
                        <a href="/Marketplace">
                            <span className={styles.icon}><StorefrontIcon /></span>
                            <span className={styles.label}>Marketplace</span>
                        </a>
                    </div>
                    <div className={styles.featureItem}>
                        <a href="/Jobs">
                            <span className={styles.icon}><WorkIcon /></span>
                            <span className={styles.label}>Jobs</span>
                        </a>
                    </div>
                </div>
            </aside>



            <section className={styles.mainContent}>


                <div className={styles.jobCard}>
                    <div className={styles.jobAvatar}>
                        <img src={Logoc} alt="Company Logo" />
                    </div>
                    <div className={styles.jobDetails}>
                        <h2>Sales &amp; Customer Manager</h2>
                        <p className={styles.jobLocation}>Bd. 1 Decembrie 1918, nr. 1G, Bucuresti</p>
                        <a href="#" className={styles.companyLink}>42Crunch</a>
                    </div>
                    <div className={styles.jobTypeFullTime}>
                        Full Time
                    </div>
                </div>

                <div className={styles.jobCard}>
                    <div className={styles.jobAvatar}>
                        <img src={Unisoftwareplus} alt="Company Logo" />
                    </div>
                    <div className={styles.jobDetails}>
                        <h2>iOs and Android Developer Needed</h2>
                        <p className={styles.jobLocation}>Știrbei Vodă 114-116, Bucuresti</p>
                        <a href="#" className={styles.companyLink}>Uni Software Plus</a>
                    </div>
                    <div className={styles.jobTypeFullTime}>
                        Full Time
                    </div>
                </div>

                <div className={styles.jobCard}>
                    <div className={styles.jobAvatar}>
                        <img src={Sigmasoftware} alt="Company Logo" />
                    </div>
                    <div className={styles.jobDetails}>
                        <h2>Full Stack Software Engineer PHP/React</h2>
                        <p className={styles.jobLocation}>Sf. Lazar nr.4, Iasi, MUN. IAŞI</p>
                        <a href="#" className={styles.companyLink}>Sigma Software</a>
                    </div>
                    <div className={styles.jobTypePartTime}>
                        Part Time
                    </div>
                </div>

                <div className={styles.jobCard}>
                    <div className={styles.jobAvatar}>
                        <img src={Sigmasoftware} alt="Company Logo" />
                    </div>
                    <div className={styles.jobDetails}>
                        <h2>Fullstack Web Developer (Angular / NestJS / Java)</h2>
                        <p className={styles.jobLocation}>Calea Floreasca 246C, București 014476, Bucharest</p>
                        <a href="#" className={styles.companyLink}>Sigma Software</a>
                    </div>
                    <div className={styles.jobTypeTemporary}>
                        Temporary
                    </div>
                </div>

                <div className={styles.jobCard}>
                    <div className={styles.jobAvatar}>
                        <img src={Xreacherlogo} alt="Company Logo" />
                    </div>
                    <div className={styles.jobDetails}>
                        <h2>Senior Fullstack Developer - Python + React | EU</h2>
                        <p className={styles.jobLocation}>Corneliu Coposu, Bucuresti</p>
                        <a href="#" className={styles.companyLink}>xReacher</a>
                    </div>
                    <div className={styles.jobTypeFullTime}>
                        Full Time
                    </div>
                </div>

                <div className={styles.jobCard}>
                    <div className={styles.jobAvatar}>
                        <img src={Pixeldata} alt="Company Logo" />
                    </div>
                    <div className={styles.jobDetails}>
                        <h2>.NET Web Developer (Industrial Applications)</h2>
                        <p className={styles.jobLocation}>Bld. Decebal, Nr. 2, Bl. H3/18, Piatra-Neamt</p>
                        <a href="#" className={styles.companyLink}>PixelData</a>
                    </div>
                    <div className={styles.jobTypeTemporary}>
                        Temporary
                    </div>
                </div>

                <div className={styles.jobCard}>
                    <div className={styles.jobAvatar}>
                        <img src={Pixeldata} alt="Company Logo" />
                    </div>
                    <div className={styles.jobDetails}>
                        <h2>Mid-Level Frontend Developer</h2>
                        <p className={styles.jobLocation}>Dr. Victor Poloni, 28, Bucuresti</p>
                        <a href="#" className={styles.companyLink}>PixelData</a>
                    </div>
                    <div className={styles.jobTypePartTime}>
                        Part Time
                    </div>
                </div>

                <div className={styles.jobCard}>
                    <div className={styles.jobAvatar}>
                        <img src={Xebia} alt="Company Logo" />
                    </div>
                    <div className={styles.jobDetails}>
                        <h2>Product compliance specialist</h2>
                        <p className={styles.jobLocation}>Dimitrie Pompeiu 6E, Bucuresti</p>
                        <a href="#" className={styles.companyLink}>Xebia</a>
                    </div>
                    <div className={styles.jobTypeFullTime}>
                        Full Time
                    </div>
                </div>

                <div className={styles.jobCard}>
                    <div className={styles.jobAvatar}>
                        <img src={Raffall} alt="Company Logo" />
                    </div>
                    <div className={styles.jobDetails}>
                        <h2>Senior Full Stack Developer | Web3</h2>
                        <p className={styles.jobLocation}>Bulevardul Iuliu Maniu 6F, București</p>
                        <a href="#" className={styles.companyLink}>Raffall</a>
                    </div>
                    <div className={styles.jobTypeTemporary}>
                        Temporary
                    </div>
                </div>

                <div className={styles.jobCard}>
                    <div className={styles.jobAvatar}>
                        <img src={Idrive} alt="Company Logo" />
                    </div>
                    <div className={styles.jobDetails}>
                        <h2>Python Developer for AI startup</h2>
                        <p className={styles.jobLocation}>Str Zaharia Barsan nr. 7, CLUJ-NAPOCA</p>
                        <a href="#" className={styles.companyLink}>iDrive</a>
                    </div>
                    <div className={styles.jobTypeFullTime}>
                        Full Time
                    </div>
                </div>
            </section>


            <aside className={styles.rightSide}>

                <div className={styles.featuredJobs}>
                    <h3>Featured Jobs</h3>
                    <ul>
                        <li>
                            <span className={styles.jobIcon}><img src={Zipper} alt="" /></span>
                            <span className={styles.jobTitle}>Sales & Customer Success ...</span>
                            <span className={styles.jobTypeFullTime}>Full Time</span>
                        </li>
                        <li>
                            <span className={styles.jobIcon}><img src={Nexer} alt="" /></span>
                            <span className={styles.jobTitle}>Marketing Data Enrichment ...</span>
                            <span className={styles.jobTypeFullTime}>Full Time</span>
                        </li>
                        <li>
                            <span className={styles.jobIcon}><img src={Adecco} alt="" /></span>
                            <span className={styles.jobTitle}>Software Quality Assurance ...</span>
                            <span className={styles.jobTypeFullTime}>Full Time</span>
                        </li>
                        <li>
                            <span className={styles.jobIcon}><img src={Mongo} alt="" /></span>
                            <span className={styles.jobTitle}>iOS and Android Developer ...</span>
                            <span className={styles.jobTypeFreelance}>Freelance</span>
                        </li>
                        <li>
                            <span className={styles.jobIcon}><img src={Mongo} alt="" /></span>
                            <span className={styles.jobTitle}>Officer, Global Product Deve...</span>
                            <span className={styles.jobTypeTemporary}>Temporary</span>
                        </li>
                    </ul>
                </div>
            </aside >

        </div >


    );
};

export default Jobs;

