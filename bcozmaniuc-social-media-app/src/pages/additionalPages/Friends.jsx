import styles from './Friends.module.scss';

import logoWebsite from '../../assets/purplelogo.png'
import StorefrontIcon from '@mui/icons-material/Storefront';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import WorkIcon from '@mui/icons-material/Work';
import BogdanPic from '../../assets/BogdanCozmaniuc.jpeg';

import Rihanna from '../../assets/personsToFollow/rihanna.jpeg';
import Tomhardy from '../../assets/personsToFollow/tom-hardy.jpg';
import Tomcruise from '../../assets/personsToFollow/tom-cruise.jpg';
import Djkhaled from '../../assets/personsToFollow/dj-khaled.jpg';
import Pepguardiola from '../../assets/personsToFollow/pep-guardiola.jpg';

import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

import FriendRequestButton from '../../components/FriendRequestSend.jsx'
import FriendRequest from '../../components/FriendRequest.jsx'



const Friends = () => {

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

                <div className={styles.profileContainer}>
                    <div className={styles.profileCardFriends}>
                        <img src="https://cdn2.psychologytoday.com/assets/styles/manual_crop_4_3_1200x900/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=eaVcXTz5"
                            alt="Alice" className={styles.avatar} />
                        <h3>Anamaria</h3>
                        <p className={styles.active}>Active 5 hours</p>
                        <p>15 Friends</p>
                        <p>3 Groups</p>
                        <button className={styles.viewProfile}>View Profile</button>
                        <FriendRequestButton />
                    </div>

                    <div className={styles.profileCardFriends}>
                        <img src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg"
                            alt="Sephiroth" className={styles.avatar} />
                        <h3>Cristina</h3>
                        <p className={styles.active}>Active 1 day, 9 hours ago</p>
                        <p>125 Friends</p>
                        <p>6 Groups</p>
                        <button className={styles.viewProfile}>View Profile</button>
                        <FriendRequestButton />
                    </div>

                    <div className={styles.profileCardFriends}>
                        <img src="https://images.sidearmdev.com/convert?url=https%3a%2f%2fdxbhsrqyrr690.cloudfront.net%2fsidearm.nextgen.sites%2fucasports.com%2fimages%2f2025%2f7%2f31%2fDude_Person.jpg&type=webp"
                            alt="Linda Lohan" className={styles.avatar} />
                        <h3>Mark</h3>
                        <p className={styles.active}>Active 2 days, 2 hours ago</p>
                        <p>236 Friends</p>
                        <p>5 Groups</p>
                        <button className={styles.viewProfile}>View Profile</button>
                        <FriendRequestButton />
                    </div>

                    <div className={styles.profileCardFriends}>
                        <img src="data:image/jpeg;base64,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"
                            alt="Irina Petrova" className={styles.avatar} />
                        <h3>Ibrahim</h3>
                        <p className={styles.active}>Active 2 hours ago</p>
                        <p>12 Friends</p>
                        <p>3 Groups</p>
                        <button className={styles.viewProfile}>View Profile</button>
                        <FriendRequestButton />
                    </div>

                    <div className={styles.profileCardFriends}>
                        <img src="data:image/jpeg;base64,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"
                            alt="Irina Petrova" className={styles.avatar} />
                        <h3>Marta</h3>
                        <p className={styles.active}>Active 5 minutes ago</p>
                        <p>1021 Friends</p>
                        <p>5 Groups</p>
                        <button className={styles.viewProfile}>View Profile</button>
                        <FriendRequestButton />
                    </div>

                    <div className={styles.profileCardFriends}>
                        <img src="data:image/jpeg;base64,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"
                            alt="Irina Petrova" className={styles.avatar} />
                        <h3>Cristian</h3>
                        <p className={styles.active}>Active 3 hours ago</p>
                        <p>230 Friends</p>
                        <p>1 Group</p>
                        <button className={styles.viewProfile}>View Profile</button>
                        <FriendRequestButton />
                    </div>

                    <div className={styles.profileCardFriends}>
                        <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEBAQEBIPEBAQDw8PEBAPDw8PDw8PFREWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQFy0dHSItLS0tLS0tLS0tLS0tKysrLS0tKy0tLS0rKystLS0rLSstLS0tLS0tLS0tLS0tLS0tLf/AABEIARMAtwMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xAA6EAABAwIDBQUFBwQDAQAAAAABAAIDBBEFEiEGMUFRYRMicYGRIzJCobEHUnLB0eHwFBUzYiRDgrL/xAAaAQADAQEBAQAAAAAAAAAAAAAAAQIDBAUG/8QAKBEAAgICAgEDBAIDAAAAAAAAAAECEQMSITEEMkFREyJhcZGhBTOB/9oADAMBAAIRAxEAPwDIR0x5p+KkPNHGVJjRZOg7FSlOf0hRxqQxGwtCM6hNlCqcPKudUOxunsCgUEOGOupkGGOKvqakUxlKlsPQz8eFOVlS4e5pBCtGQKQxircl4wopHAJuoe8qUGJPZFLYPpmZr6Z5uqh1E66209OoT6RGw1BlLBTPtuSZKR/JaOOnsEHQJ7C0ZmhSu5JuajJ4LSOgUeVhRsLRmVfh55KPLQnktNI1RpAjYejMnLTEcE12ZsdFo5Ybpn+kU2UomVmYeSC0M9AeSNKyqFROCmwhZaCvVhBiKCjTRNUljVnI8U6qQzFhzSHRoWxp1kaoGYuOadZi45oCjTwBTGNWWhxkc1MZjI5oA0AanGtVC3GRzTDtpgw94jKgKNU1iV2azMO1IduGnM6KZFtAxyB0WkjFHcxQZsdjG9zR4kBMDGmHcQfC5QFFtkSHNUD+6t5pLsUHNAExzVHlYorsUHNNPxMIAOaNRJGI5cRCivrwgBRYlsjUU1wQbiAQKiS+NBRHV4QQM5226eY9y0+FbOCS2hK0EOwV+HzUNiRzrtHpJqH810Kp2Iy8CsvjGBmI9EJjKUVb+aWK1/NPwURcrBuBXG/VPZBqysbXv5p5uJSc1Nbs+++7RPy4OIgHO6fshSTHqxUMrrAucdRdV0kpc7Q6k7zwClSb7gi2UjTwKq2sdc25W+iskedWFugufzTbMWcD8Y8HfkgKd2oA10b6gfook9KWjcf5xPRAE5laHc7neTqT5qVh+IyGTKD3foqKPr8gfrdWlCBcWBv1NkAWVTib280x/eXqVWxZmhxLQ46EC1+iqf6cqXwPsl/3d/VJOKu6ptlESnWYY86AJWOhDsTd1TZxJyt4Nk6h40aPO6E+xtU0XLR80bCKU4k5J/ubkqrwySM2c2yhmFOxUSDibkFFMSJFhR37ZPCg2NptrYLWRUgtuVds4z2TPwhaBrdEoK1YmynrqMEblzTbOlADtOa61VjRc/24pwIXO8foVlN0zSCtHO8IgBsrtkIuAs5RyltrKd/cXZgqlFlKRsIYGhu6/IczyWc2pcGOa0kA2zG28E6CynUOIi2ZxtlF1lMQrBPUPfrbrwaNAEY407HOSaolUlIZ3NawOPPitVTbBE2N8vir/YPBmMhbIQMztfJaqSybkxxijDO2LY29is3i+yMouG6rqUgUWVqz2ZooI4jWbLVDdcp8Aqv+lc11jmY7qCPmu+GAHeAs3tPsy2RhfGAHAX04prI/cUsK9jn+HVBByyWvawcQDfwKkdgL7x+qhRPbnMT9NbA8irWigu4DfbhzHRayfBjGPJa4RhJfaw052WowzZ2zwSFYbNQM7NhFuAP6rWQUwXL9VtnRLEkuSFR4e0AaBPVWHBw3BWTWWThsulO0cclTOa7Q7Lh4Nh8lhZtkpAT+i7xUwg8FVzYa3ks5X7GsWvc4jLsxKES7DPhTeSCjaRX2lns6PZM/CFfMVLs+32bPwhXrGrph0c0uyJUhYT7QDanPn9CuiSsWH+0OnvTv6Bx+RWU1yaQfBxeORGyXvKM9pCEIOZbMlF9SuuCOYsqajgPbFvwg55D52Y1WVMSPE/Ic1J2epmy1EMQ/7JXSyHiQ0fwKLpGiVnXdmoyKaMEfCFMeNUzUyMZHlc/s2Aa2OUkW3X4LEYi+nJJp55Yn8HNne4X6hxIKxbS7OiMW+jbyEJhwWe2fq6lzskrmyjhI0WJHUc1aYpK9jCWi54KNjTQkuahkuD4LFdvVvd7SqEIv7sbW5rfiK0uCsc1uk7p2/E2TJmHVpAHommn7g017HH9soAKiRzdLOO5IwqpmtmYQ7Lvad9uYVz9pdOI6nMPdkaHbtL7jf0WfwSXK63oOnFv6LePMTllxM6PsztEGholuzkd7d994/NdHoMSY5oLXAg7rFcchO4t3H+WKnUWKyQu7vu/E34fEDgueeJ3cToWVVUjsjagFK7YLntPtc0aOuPFTmbTRnc4eqUXJdozlGL5TNm6UJl8gVTS1uYA81Je4WWqk2YuNDkkgQVZUyW3IJWx0Wuzx9mz8IV9GshsrXh0TNfhC1EUwW0JKjKS5JD1j9uxenk/C76FaeaoACwW3GKDI5gO8EeqU3bocUcnlp7lKgpdVYsjunOz1VsCsxUFkZcOIy+CufsvjvXXP/XAfIlwH5qo2hN2xt+88fJXP2YB39W9/wkOjv1978lE+Ea4+WdLx/A4qpgbKC5o1sHuZr/5Oqw9dsLADeJszCPuvJ+pvwXTmbtVDqpWgXOiy/N0brnhqyi2Pwh8Pvue7gM4bmHorPHIS6NwbodbHkrLCJBJH2gFmkkNJ+Kxtf1ukzxEtcQMxF7AceiNftDZ7HKZNmZZHHPNKwk72MAaRy0N/mrfANlZYZWvFTKWfExzWgO8x+61FFKyQBzfQ6EHiCOamhoCnlrvgrhPrk5p9rMH+F3Rw+YXNqWWzvD6LqH2oygiJh3nN+X6LlAdqehI8lrifBhmVSs32Czh7COY9HD+BPzTiw8Fndnqqz28naefBW2JNOW43aq12Q3xY7LVtKgySi4sePNVYnKS6c3VUZWdywW3Zx2+636K7DAQua7LbRAxtaTYtAC08m0Aa2+YbllFexcibVsQWRqtpi7iEFroZ7kDZ3HnQDKblv0Wrj20ZbeVzwJTXoeJNhu0biu2xLhZossvW1DpDdxUdrk6xiuONIlzYI4wnDEnY41IZEr1ROxldp+6IvF30Vh9nWMRxTNheDmmlaY3DdmykFp9VF20jsxh45z6W/dZWlqHMLZG+/E9sjfFpuPmFz5I3wdOKVKz0hNPYXWZra8yyFmYMjb/ke5wa0Dlcqyoq1tRBHKzVsjGuHmNR5HRYvGcKc17qvJ2zGS2fE4nKQDv6aX1tvsuJ23R6OJI3EdXBlZkqGdz3QyVmU9CDoUI603HtQ1wv3c8et+fNVVBLg87GmWFsFrNImjazLdpN84uLbtb8lHraPAomh5cx/u/4y6Um7rWAbf8AhVuDGpYvz/CY65zoJtfdkN78MxKu4qjMFzmgg7efNS9vHSMe0ESOOV7uFm8NfPTqt3F3R0Cydp0VJJmF+0+pawg3Gfs7NHG5dvsuYQb7eK0e3OJtqK2Ug3awdi08Lt1J9brOsGvoV24o1E87NLaRa0YIsRz9DwWoL88QI5a9CsxSPB8Doeh4FaDBX3Jjdv19eKtdkPogyUh/m5MPpVrH4f0UaTD1sonO2ZlrXtN2kg9EueunIsXGyuJKHooktH0RqLYpzUyA7ygpU9MglQ7LcSJ6JqKCBWEFOkMTFGpkUKdhp1NigTsBmKFPtiUqOFPdinYqMdjcHaZy73WtAHrqsJEbG+8bneC3m1T8kTwOOrrcNdywZOSRgPEd4fiO5ZPk3XB0L7MMZyl1FIbt1kgPT4m/n6rp1PRsLJGOF2SE381xPYKImvjaLGzZSL33AWt0XXcJxUBxhl7p4ZtD+/iFzTSUjqg3rwUdbQ1kBLImsmhuS1pEbm773yv90+BsoMVHVzuyOhip4ye85scUZ8jq70W9ma08kwIWgqKfydq8u1zBX80RIMNjijZFGLNYbnm53ElZLb/aEU0RjYfbSAhtvhHF/wCi1GKYlbuR6ni7gP1K5J9ojD2kbiSSQ65KUEpTo58jkoOXuY4MJ138TzRNfqnngZWu+9oogFjY813HnFlTyi9jx0V1QOMjmtacsmoab277dR+nms44fP6hS8KmIkF+B+e5TRaZ0TA8V7T2coySNOUjdd3K3Aq5kphyWOlYTaZpzFre8D7zmDUi/Egag9FtMJm7SIE7xofJaRkZTh7lfNShQZqZaGaNQZ41dmWpmqilQVnPGjSsdDNPGrKCNRKdqs6dqRQ/DGpccabiapcbUwFMYnXRXBG64tcbwlManHPa0XcQ0DidEhpNukYravB53BjWszRNJccg1LuBN96zjqSIxvY8ESghwu3vBw+ErbY1tVGwFsVifvO3eQXP62uc55dcnMdXcSs5cdHpY/By0pTVL+y32ELYq6NzyLPDmAngXbvmF0+uog46gHxAK4syS93dRltwtusttgG3gAbHV3u2wbM0XuP9h+a5skW+Tun4coQUocmhqhLH7jiAOG8KLHUzu3uv0Git218UzczHNe08WkFR3vaNy5ZcGMfyiN2dgTxXPPtBF8h4g2XQa6ujYwue5rdOJ1XKNqMS7eQlvuDRvXqtcEXdkzjsqM9a/HT6FFk1A5I2b7EX+SelYBw39bruPMaosccw0xFnJ8bZG+NrOH85qG2zBG7fnbd3Q5jp8lcVWNR1FLHG4ZZ4CA1332WsR9Cqd8V7cgb+BTEabDpyIi46gxyf/J/VazZm7oA9p14jgR1WSwWaPI6OQ5czSwOO5t9yvcJrzT2jkBa12jZN8b78jzUotmozAtB5qHOE9C/3rbtHDzH7JqdaI52Vk4QSp0EwEU4VnThV9OFZQBMCbEEddXsgZ2kl7XAAGpJTFTVNiYXu4bhzPJYXHMUdLe58ByHRS2ej4PgPPc3xFf2X9Tt1YHs4SDwL3D6BZnE9oJ5jdzyByboFUucUkFJs9nFgx4fRGh4Pvv1R20I4E38E20J5oUM7FFTVMDDYWTTynkh4SKkuKEQ1D2G7HOYebXFv0Uh2N1JFu2kt4qKWJJYpcUzllC+0Jmme73nOd4klR3hSCxNuamYzhwQpI+Kae1x43tw4qa5ibMaaZ52bxtuiFrcfzRTIpfX6pp8KZIIVWcEscoumXNJML94ac+S0+GgSMyNJyuu1zPeYeB0Kw0U5G9aPZrERE8E+6SDrw6oHGLlwarZmocDJA83MTzGHHi0ajzsVczqh2dlDzO7iaiV3Ua2HyCvJHaKomE1yV86NJqCjVEAp1Z06qIHKf24axzjua0n5IKSt0Z7anEs0pjB7seni7is1LJdJqakuc5x3ucT6lMZ1k2fWY2sWNY17C7owElqcaEi48i2pxpTYSgUHRB0LKQUd0RQW2Jyoi1KQSM2kNlqGVLQQRqhlzEgxp8pJCDOUEMGNNPgUshJITMJ4IyXJBdAno76dE48oNKLOd+NCzV7LUMU7XglzJW94PY4tJH5q6pnPY8wynMbZo37i9o0IPUfmsrstWdnURng45D4FbDHhYMkG+KRrv/J0cPQq0ed52FY5qumhqoCCKdyCs88iwOQxyfLTSdQG+pSICo21D/8Aj+L2ofRt46vLH9mPeUTUklAFYnv7ckgFPDcoYf3gOinNGiR14HtYlKBSULoNrF3RFJujQOw0CiuggLAgiQQKwkRQJRIIbAielNSJjoTyCCZemyO/eiBQJ3pKDhb5JVPIQQRwIPoujzntIR/uwfMLmLHLoeFy3p4vwBXA4/8AIc44v4YJdwugkzuQWh45GhcoW1LvYN/GE9E5QNqJPZsHN35IfR0eN/tRmboiUElxWJ6zlSDhd3hz3BWu4KliPfb4q4JQdfgT+2X7CJRXREoroOpyFAo7pF0YKAUhd0LpN0LpFbBkoiURKIlMlyDuiuiSSUEOQsFCTd5FJBRVLrRuPRIHL7W/hEBj0u6YjKdBTPIhO0OtK3eDv/40X4VgmlbbB3/8ePwVQ7M/Md4l+yRM5BMzPRLQ8oZiKrdpj3I/E/RTY3KDtH/jaeTkPo38d1kRn7pt5SrptxWR6E5cCqT/ACNVpmVVSnvjzViXJM6/BlWN/sUSium8yGZB0uY5dHdNByO6BqQ7dC6bzI8yRWwu6K6TdE5yYnINxSbpOZC6DNyHAkVx9mfEfVGCmq93ctzIQLJKsUv0yCxPAphqcBTZ5MGPNK2OGG1PH4XWMZqQOei27G5WNbyaAqgR5UvsSG5XoJuVBWcA2xyh48/2QH+yfa5QccPcb4pPo1w+tFKSm3FKKbcVB1yYGusQeRU8uVaresisyJwFs7ASOo4oaNfHyVaGM6GZM3QzKTf6o9nR9omMyGZIPqkjOhnTGZDMgv6xI7RJL0zmRZkCeYezIZkzmQDkC+qSGuUevk1A5alOsUKY3cSqRHkZWsdfIAnAmmlONTOOLLHBoM8zBwBzHwC10jlR7NQ2a6Tn3R4K2e9UjHPK5V8CJCgmnuQTMCO1QsaPcHipLXKJi+rB0KGXi9SKQlIJRuSLKDeTFRNu4Aa3I0Wkx6w7FlrZY9fNQMBoSZGuOgGqsNp5byMAto3VHsXgdZEUr2pohPA+SIjp6KTrlBPlDKO6XYIkGetCboXSkSAr8hIJSFkBqEAlsYiASwUGkYr3HWkDfuVa5TZT3Sq8lNGPlvlIU1PMTIUugizPaOvyTMIM1OGx5IWg77XPmnHuSS5NvcrOWTt2B7kSac9BAhppUumja64cARbcVADlMo3Wupn6WXj9SE1FBANzAqirDRuACtquRUFa/VYws6ZvgtcDqAC5ztzW3UCsnzvc7mdPBM081mOH3tPJJJWppgVLYBKF0m6K6Rq5CiUSTdC6CdhVwjukXRpBsHfxQRXQugNhV0ElGCmNMLPcEcVFIUg+8nWRh29HRhkuX/CI1XOBxal/ACw8UwzCyT3SPNXMEQY0NHD5lNcmMnqqHi5NPcg5yac5WYCXORpt5RIAKNS6biggpn0Xj9SGKsqkq96JBZwN59BR7kaCCs3j6UEUSCCBMCCCCBAQsjQQMJBBBAgBGgggaE8VIpEaCUuiC6oxonHIIJw6ObL6htyaeggrMxp6CCCAP//Z"
                            alt="Irina Petrova" className={styles.avatar} />
                        <h3>Matilda</h3>
                        <p className={styles.active}>Active 16 hours ago</p>
                        <p>97 Friends</p>
                        <p>2 Groups</p>
                        <button className={styles.viewProfile}>View Profile</button>
                        <FriendRequestButton />
                    </div>

                    <div className={styles.profileCardFriends}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvJaoIeJQU_V9rL_ZII61whWyqSFbmMgTgwQ&s"
                            alt="Irina Petrova" className={styles.avatar} />
                        <h3>Maria</h3>
                        <p className={styles.active}>Active 2 months ago</p>
                        <p>231 Friends</p>
                        <p>1 Group</p>
                        <button className={styles.viewProfile}>View Profile</button>
                        <FriendRequestButton />
                    </div>

                    <div className={styles.profileCardFriends}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ1cb24rpWs9Gx1GPOCouXbrFhwYLQhukk3w&s"
                            alt="Irina Petrova" className={styles.avatar} />
                        <h3>Cătălina</h3>
                        <p className={styles.active}>Active 51 minutes ago</p>
                        <p>1021 Friends</p>
                        <p>32 Groups</p>
                        <button className={styles.viewProfile}>View Profile</button>
                        <FriendRequestButton />
                    </div>
                </div>

            </section>


            <aside className={styles.rightSide}>

                {/* friend request */}

                <div className={styles.AcceptDeny}>
                    <p className={styles.titleWhoToAcceptDeny}>Friend Requests</p>

                    <div className={styles.requests}>
                        <div className={styles.profileInfoFriendRequests}>
                            <img src="https://storage.pixteller.com/designs/designs-images/2019-01-10/07/profile-phote-avatar-human-girl-yellow-fashion-1-5c3784f592e84.png" alt="profile picture"
                                className={styles.profileImageFriendRequests} />
                            <div className={styles.profileNameFriendRequests}>
                                <span style={{ fontWeight: 'bold' }}>Cristina Maria</span>
                                <span>2 mutual friends</span>
                            </div>
                        </div>
                        <FriendRequest />
                    </div>


                    <div className={styles.requests}>
                        <div className={styles.profileInfoFriendRequests}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN8pmCkUBpnfur_9855v_RO8Ay1-APdi4W0w&s" alt="profile picture"
                                className={styles.profileImageFriendRequests} />
                            <div className={styles.profileNameFriendRequests}>
                                <span style={{ fontWeight: 'bold' }}>Andra Mihnea</span>
                                <span>15 mutual friends</span>
                            </div>
                        </div>
                        {<div className={styles.acceptOrDecline}>
                            <FriendRequest />
                        </div >}
                    </div >

                    <div className={styles.requests}>
                        <div className={styles.profileInfoFriendRequests}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRij6dtiHizH96qpCOe8WeXXP3yLyQJkPdGVg&s" alt="profile picture"
                                className={styles.profileImageFriendRequests} />
                            <div className={styles.profileNameFriendRequests}>
                                <span style={{ fontWeight: 'bold' }}>Razvan Matei</span>
                                <span>5 mutual friends</span>
                            </div>
                        </div>
                        {<div className={styles.acceptOrDecline}>
                            <FriendRequest />
                        </div >}
                    </div >

                    <div className={styles.requests}>
                        <div className={styles.profileInfoFriendRequests}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSegouWjeS9e1_fACuI4oWxW2zWaAXxYKJMOg&s" alt="profile picture"
                                className={styles.profileImageFriendRequests} />
                            <div className={styles.profileNameFriendRequests}>
                                <span style={{ fontWeight: 'bold' }}>Cristi Teiu</span>
                                <span>12 mutual friends</span>
                            </div>
                        </div>
                        {<div className={styles.acceptOrDecline}>
                            <FriendRequest />
                        </div >}
                    </div >

                    <div className={styles.requests}>
                        <div className={styles.profileInfoFriendRequests}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN3-b6hE_5K-l4bv_gBuFtF5zWoPEhSkLsuw&s" alt="profile picture"
                                className={styles.profileImageFriendRequests} />
                            <div className={styles.profileNameFriendRequests}>
                                <span style={{ fontWeight: 'bold' }}>Gabriela Rotaru</span>
                                <span>0 mutual friends</span>
                            </div>
                        </div>
                        {<div className={styles.acceptOrDecline}>
                            <FriendRequest />
                        </div >}
                    </div >

                    <span className={styles.viewMore}>View More</span>
                </div >


                {/* who to follow */}

                <div className={styles.whoToFollow}>
                    <p className={styles.titleWhoToFollow}>Who to follow</p>

                    <div className={styles.celebrity}>
                        <div className={styles.profileInfo}>
                            <a href="">
                                <img src={Rihanna} alt="profile picture"
                                    className={styles.profileImageToFollow} />
                            </a>
                            <div className={styles.profileNameToFollow}>
                                <span style={{ fontWeight: 'bold' }}>Rihanna</span>
                                <span>Singer</span>
                            </div>
                        </div>
                        <i className={styles.addCelebrity}><PersonAddIcon /></i>
                    </div>

                    <div className={styles.celebrity}>
                        <div className={styles.profileInfo}>
                            <a href="">
                                <img src={Tomhardy} alt="profile picture"
                                    className={styles.profileImageToFollow} />
                            </a>
                            <div className={styles.profileNameToFollow}>
                                <span style={{ fontWeight: 'bold' }}>Tom Hardy</span>
                                <span>Actor</span>
                            </div>
                        </div>
                        <i className={styles.addCelebrity}><PersonAddIcon /></i>
                    </div>

                    <div className={styles.celebrity}>
                        <div className={styles.profileInfo}>
                            <a href="">
                                <img src={Tomcruise} alt="profile picture"
                                    className={styles.profileImageToFollow} />
                            </a>
                            <div className={styles.profileNameToFollow}>
                                <span style={{ fontWeight: 'bold' }}>Tom Cruise</span>
                                <span>Actor</span>
                            </div>
                        </div>
                        <i className={styles.addCelebrity}><PersonAddIcon /></i>
                    </div>

                    <div className={styles.celebrity}>
                        <div className={styles.profileInfo}>
                            <a href="">
                                <img src={Djkhaled} alt="profile picture"
                                    className={styles.profileImageToFollow} />
                            </a>
                            <div className={styles.profileNameToFollow}>
                                <span style={{ fontWeight: 'bold' }}>Dj Khaled</span>
                                <span>Record Producer</span>
                            </div>
                        </div>
                        <i className={styles.addCelebrity}><PersonAddIcon /></i>
                    </div>

                    <div className={styles.celebrity}>
                        <div className={styles.profileInfo}>
                            <a href="">
                                <img src={Pepguardiola} alt="profile picture"
                                    className={styles.profileImageToFollow} />
                            </a>
                            <div className={styles.profileNameToFollow}>
                                <span style={{ fontWeight: 'bold' }}>Pep Guardiola</span>
                                <span>Football Coach</span>
                            </div>
                        </div>
                        <i className={styles.addCelebrity}><PersonAddIcon /></i>
                    </div>

                    <span className={styles.viewMore}>View More</span>
                </div>


            </aside >

        </div >


    );
};

export default Friends;

