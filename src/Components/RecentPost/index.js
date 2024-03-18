import React from 'react';
import ColOneImg from '../Assets/CRACKDOWN-ON-GAMING-WEBSITES.jpg';
import Post from '../Post';
import './style.css';
import RecentPostImg1 from '../Assets/RecentPostImg1.jpg';
import RecentPostImg2 from '../Assets/RecentPostImg2.jpg';
import RecentPostImg3 from '../Assets/RecentPostImg3.png';

const RecentPost = () => {
  return (
    <div className='recent-post-main-container'> 
        <div className='latest-news-heading'>OUR LATEST NEWS</div>
        <div className='recent-post-heading'><span>Recent</span> Posts</div>
        <div className='recent-post-child-main-container'>
        <Post contentType={"BLOG"} contentHeading={"Crackdown On Gaming Websites"} content={'Crackdown On Gaming Websites, Rs 4,000 Crore Remittances Under Scanner   Delhi Police’s Economic Offences Wing has filed an FIR and has commenced an investigation against online'} recentPostBg={RecentPostImg1}/>
        <Post contentType={"BLOG"} contentHeading={'Digital Personal Data Protection Act, 2023 And Its Impact On The It/Ites Sector'} content={'In an era dominated by digital transformation, the protection of personal data has become a critical concern. India’s Digital Personal Data Protection Act of 2023 (DPDP Act) is a significant'} recentPostBg={RecentPostImg2}/>
        <Post contentType={"NEWSLETTER"} contentHeading={"INSIGNIA- Distinguished Details Delivered – January, 2024"} content={'MINISTRY OF CORPORATE AFFAIRS (MCA)   MCA NOTIFIES COMPANIES LISTING OF EQUITY SHARES RULES The MCA vide notification no. G.S.R. 61(E) dated 24-01-2024, has notified the Companies (Listing of equity shares in permissible jurisdictions)'} recentPostBg={RecentPostImg3}/>
        </div>

    </div>
  )
}

export default RecentPost;