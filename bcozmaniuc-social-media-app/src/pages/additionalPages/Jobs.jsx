import styles from './Groups.module.scss';

import logoWebsite from '../../assets/purplelogo.png'
import StorefrontIcon from '@mui/icons-material/Storefront';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import WorkIcon from '@mui/icons-material/Work';
import BogdanPic from '../../assets/BogdanCozmaniuc.jpeg';


const Groups = () => {

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


                <div className={styles.shopContainer}>
                    <div className={styles.shopHeader}>
                        <span>Showing 9 of 9 results</span>
                        <select>
                            <option>Newest</option>
                            <option>Lowest price</option>
                            <option>Highest price</option>
                        </select>
                    </div>

                    <div className={styles.productGrid}>

                        <div className={styles.productCard}>
                            <div className={styles.productImage}>
                                <img src="https://static.bershka.net/assets/public/1e7d/cdc5/9acf4d9187e9/8238c61a5873/05023211800-a4o/05023211800-a4o.jpg?ts=1751529986469&w=1920"
                                    alt="Kenton Boat Shoes" />
                            </div>
                            <div className={styles.productRating}>★★★★★</div>
                            <h3 className={styles.productTitle}>Blugi bootcut cu clape</h3>
                            <div className={styles.productPrice}>
                                <span className={styles.newPrice}>£149.00</span>
                            </div>
                        </div>

                        <div className={styles.productCard}>
                            <div className={styles.productImage}>
                                <img src="https://static.bershka.net/assets/public/7a80/0746/67a545edbbfc/2be52e7fb01a/00017211400-b/00017211400-b.jpg?ts=1737120923694&w=800"
                                    alt="Kenton Boat Shoes" />
                            </div>
                            <div className={styles.productRating}>★★★★★</div>
                            <h3 className={styles.productTitle}>Blugi evazați</h3>
                            <div className={styles.productPrice}>
                                <span className={styles.newPrice}>£139.00</span>
                            </div>
                        </div>

                        <div className={styles.productCard}>
                            <div className={styles.productImage}>
                                <img src="https://static.bershka.net/assets/public/178a/5afb/69fc4628a480/bf568bbaac8b/07824187251-03-a4o/07824187251-03-a4o.jpg?ts=1753793303921&w=800"
                                    alt="Kenton Boat Shoes}" />
                            </div>
                            <div className={styles.productRating}>★★★★★</div>
                            <h3 className={styles.productTitle}>Tricou mânecă scurtă print
                            </h3>
                            <div className={styles.productPrice}>
                                <span className={styles.newPrice}>£69.00</span>
                            </div>
                        </div>

                        <div className={styles.productCard}>
                            <div className={styles.productImage}>
                                <img src="https://static.bershka.net/assets/public/193d/575c/0b694007874e/14ef27b0b9d5/06084168462-a4o/06084168462-a4o.jpg?ts=1753704177069&w=800"
                                    alt="Kenton Boat Shoes" />
                            </div>
                            <div className={styles.productRating}>★★★★★</div>
                            <h3 className={styles.productTitle}>Fustă mini tailoring</h3>
                            <div className={styles.productPrice}>
                                <span className={styles.newPrice}>£109.00</span>
                            </div>
                        </div>

                        <div className={styles.productCard}>
                            <div className={styles.productImage}>
                                <img src="https://static.bershka.net/assets/public/e5c2/1865/13aa4fda975a/bcfea375faaa/11500560001-a4o/11500560001-a4o.jpg?ts=1736414261528&w=800"
                                    alt="Kenton Boat Shoes" />
                            </div>
                            <div className={styles.productRating}>★★★★★</div>
                            <h3 className={styles.productTitle}>Shoes</h3>
                            <div className={styles.productPrice}>
                                <span className={styles.newPrice}>£349.00</span>
                            </div>
                        </div>

                        <div className={styles.productCard}>
                            <div className={styles.productImage}>
                                <img src="https://static.bershka.net/assets/public/87f4/2990/b3b44c82887e/7ab295dbc377/00911727251-03-a4o/00911727251-03-a4o.jpg?ts=1746006376635&w=800"
                                    alt="Kenton Boat Shoes" />
                            </div>
                            <div className={styles.productRating}>★★★★★</div>
                            <h3 className={styles.productTitle}>Salopetă scurtă din denim</h3>
                            <div className={styles.productPrice}>
                                <span className={styles.newPrice}>£219.00</span>
                            </div>
                        </div>

                        <div className={styles.productCard}>
                            <div className={styles.productImage}>
                                <img src="https://static.bershka.net/assets/public/d9aa/6dd8/b17b40be9859/44ce9544f279/07824187712-a4o/07824187712-a4o.jpg?ts=1753773837970&w=800"
                                    alt="Kenton Boat Shoes" />
                            </div>
                            <div className={styles.productRating}>★★★★★</div>
                            <h3 className={styles.productTitle}>Tricou mânecă scurtă print</h3>
                            <div className={styles.productPrice}>
                                <span className={styles.newPrice}>£69.00</span>
                            </div>
                        </div>

                        <div className={styles.productCard}>
                            <div className={styles.productImage}>
                                <img src="https://static.bershka.net/assets/public/f7c4/6135/b4984020acc4/003087012c8f/05103700807-03-a4o/05103700807-03-a4o.jpg?ts=1753363079677&w=800"
                                    alt="Kenton Boat Shoes" />
                            </div>
                            <div className={styles.productRating}>★★★★★</div>
                            <h3 className={styles.productTitle}>Pantaloni jogger flaușați stoppers</h3>
                            <div className={styles.productPrice}>
                                <span className={styles.newPrice}>£59.00</span>
                            </div>
                        </div>

                        <div className={styles.productCard}>
                            <div className={styles.productImage}>
                                <img src="https://static.bershka.net/assets/public/7caa/9db9/7d9440daa01b/27d0c0b10817/06384710717-a4o/06384710717-a4o.jpg?ts=1752748564103&w=800"
                                    alt="Kenton Boat Shoes" />
                            </div>
                            <div className={styles.productRating}>★★★★★</div>
                            <h3 className={styles.productTitle}>Cămașă mânecă scurtă tailored fit</h3>
                            <div className={styles.productPrice}>
                                <span className={styles.newPrice}>£85.00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <aside className={styles.rightSide}>
                <div className={styles.productsContainer}>
                    <h3>Biggest discounts</h3>
                    <div className={styles.productsList}>


                        <div className={styles.productItem}>
                            <img src="https://contents.mediadecathlon.com/p2838697/k$2cb758761aed99249077887d3b27b5cf/sq/8940550.jpg?format=auto&f=320x320" alt="Turtleneck Sweater" />
                            <div className={styles.productDetails}>
                                <span className={styles.productName}>Încălțăminte Drumeție la munte MERRELL CROSSLANDER Bărbați</span>
                                <p className={styles.stars}>★★★★</p>
                                <span className={styles.price}><del>£98.00</del> <span className={styles.newPriceRight}>£57.00</span></span>
                            </div>
                        </div>


                        <div className={styles.productItem}>
                            <img src="https://contents.mediadecathlon.com/p2149686/k$46e6e1749ea933857eec64100e65bbfd/sq/8761330.jpg?format=auto&f=320x320" alt="Vintage Shirt" />
                            <div className={styles.productDetails}>
                                <span className={styles.productName}>Încălțăminte mers sportiv PW 160 Slip-On Negru Bărbați</span>
                                <p className={styles.stars}>★★★</p>
                                <span className={styles.price}><del>£104.00</del> <span className={styles.newPriceRight}>£75.00</span></span>
                            </div>
                        </div>


                        <div className={styles.productItem}>
                            <img src="https://contents.mediadecathlon.com/p2838659/k$9540be2d726a6acaf753a8ed1a036420/sq/8940968.jpg?format=auto&f=320x320" alt="Stretch Short Sleeve" />
                            <div className={styles.productDetails}>
                                <span className={styles.productName}>Încălțăminte joasă Drumeție la Munte MH100 Gri Bărbați</span>
                                <p className={styles.stars}>★★★★★</p>
                                <span className={styles.price}><del>£60.00</del> <span className={styles.newPriceRight}>£32.00</span></span>
                            </div>
                        </div>


                        <div className={styles.productItem}>
                            <img src="https://contents.mediadecathlon.com/p1804455/k$aff9d14c919707cffa8fe6e39ca63254/sq/8555093.jpg?format=auto&f=320x320" alt="Slimfit Shorts Men" />
                            <div className={styles.productDetails}>
                                <span className={styles.productName}>Încălțăminte Drumeție în natură ARPENAZ 500 REVIVAL Bej Bărbați</span>
                                <p className={styles.stars}>★★★★</p>
                                <span className={styles.price}><del>£58.00</del> <span className={styles.newPriceRight}>£28.00</span></span>
                            </div>
                        </div >


                        <div className={styles.productItem}>
                            <img src="https://contents.mediadecathlon.com/p2394163/k$52a7f228ec98b2067049824ca4311ea2/sq/8774141.jpg?format=auto&f=320x320" alt="Ruffled Top" />
                            <div className={styles.productDetails}>
                                <span className={styles.productName}>Încălțăminte alergare pe șosea și trail, Kiprun JF 190 Grip albastru bărbați</span>
                                <span className={styles.price}><del>£64.00</del> <span className={styles.newPriceRight}>£28.00</span></span>
                                <p className={styles.stars}>★★★★</p>
                            </div>
                        </div >
                    </div >
                </div >
            </aside >

        </div >


    );
};

export default Groups;

