import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function WorkPageDetails() {
    const [hoveredtab, sethoveredtab] = useState('WEBSITE');
    const [hover, setHover] = useState(false);
    const [subject, setSubject] = useState('Greetings');
  const [body, setBody] = useState('Hello, I wanted to reach out about...');

  const generateMailtoLink = () => {
    return `mailto:biswayanmazumder77@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };
    return (
        <div className='webbody' style={{ backgroundColor: "white" }}>
            <div className="jdndv" style={{ top: '0',marginLeft:'100vw' }}>
                <Link
                    style={{ textDecoration: 'none', color: 'black' }}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    to={'/'}
                >
                    <div
                        className="ndnvdv"
                        style={{ marginLeft: '20px', fontSize: '15px' }}
                    >
                        {hover ? '© Biswayan Mazumder' : '© Code By Biswayan'}
                    </div>
                </Link>
                <div className="ndnvdv" style={{ marginRight: '20px', width: '300px', display: 'flex', justifyContent: 'space-evenly', flexDirection: 'row' }}>
                    <Link style={{ textDecoration: 'none', color: 'black' }}>
                        <div className='dnjndjn' style={{ fontSize: '15px', display: 'flex', flexDirection: 'column', position: 'relative' }}>
                            <div>
                                Work
                            </div>
                            <div style={{ color: 'black', display: 'flex', justifyContent: 'center' }}>
                                •
                            </div>
                        </div>
                    </Link>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to={'/about'}>
                        <div className='dnjndjn' style={{ fontSize: '15px', display: 'flex', flexDirection: 'column', position: 'relative' }}>
                            <div>
                                About
                            </div>

                        </div>
                    </Link>
                    <a style={{ textDecoration: 'none', color: 'black' }} href={generateMailtoLink()}>
                        <div className='dnjndjn' style={{ fontSize: '15px' }}>
                            Contact
                        </div>
                    </a>
                </div>
            </div>
            <div className="nbbfvbfv" style={{marginLeft:'100vw',marginTop:'-30px'}}>
                <div className="ndbvbfndvb" style={{ display: 'flex', flexDirection: 'row', gap: '80px' }}>
                    <div className="bhfjvns" style={{ width: '150px', fontSize: '20px', backgroundColor: hoveredtab == 'WEBSITE' ? 'black' : 'white', color: hoveredtab == 'WEBSITE' ? 'white' : 'black' }} onClick={() => {
                        sethoveredtab('WEBSITE');
                    }}>
                        Websites
                    </div>
                    <div className="bhfjvns" style={{ width: '150px', fontSize: '20px', backgroundColor: hoveredtab == 'MOBILE' ? 'black' : 'white', color: hoveredtab == 'MOBILE' ? 'white' : 'black' }} onClick={() => {
                        sethoveredtab('MOBILE');
                    }}>
                        Mobile Apps
                    </div>
                </div>
            </div>
            {hoveredtab == 'WEBSITE' ? (<div className="hgvbb" style={{marginLeft:'100vw'}}>

                <div className="dnfjndjn">
                    <div className="dnndmvns">
                        <div
                            className="nndjvnjdvn"
                            onClick={() => window.open("https://vistaride.vercel.app", "_blank")}
                        >
                            View Site
                        </div>

                        <video src="https://videos.pexels.com/video-files/17770576/17770576-uhd_2560_1440_24fps.mp4" autoPlay muted loop height={"300px"} width={"500px"} />
                    </div>
                    <div className="kcmd">
                        VistaRide
                    </div>
                    <div className="kcmd" style={{ fontSize: '15px', marginRight: '100px' }}>
                        Interaction, Design & Development
                    </div>
                </div>
                <div className="dnfjndjn" style={{ position: 'relative', marginTop: '80px' }}>
                    <div className="dnndmvns">
                        <div
                            className="nndjvnjdvn"
                            onClick={() => window.open("https://vistafeedd.vercel.app", "_blank")}
                        >
                            View Site
                        </div>

                        <video src="https://videos.pexels.com/video-files/4121864/4121864-hd_1280_720_25fps.mp4" autoPlay muted loop height={"300px"} width={"500px"} />
                    </div>
                    <div className="kcmd">
                        VistaFeedd
                    </div>
                    <div className="kcmd" style={{ fontSize: '15px', marginRight: '100px' }}>
                        Interaction, Design & Development
                    </div>
                </div>
                <div className="dnfjndjn" style={{ position: 'relative', marginTop: '80px' }}>
                    <div className="dnndmvns">
                        <div
                            className="nndjvnjdvn"
                            onClick={() => window.open("https://vistatubee.vercel.app", "_blank")}
                        >
                            View Site
                        </div>

                        <video src="https://videos.pexels.com/video-files/6447692/6447692-hd_1920_1080_25fps.mp4" autoPlay muted loop height={"300px"} width={"500px"} />
                    </div>
                    <div className="kcmd">
                        VidTube
                    </div>
                    <div className="kcmd" style={{ fontSize: '15px', marginRight: '100px' }}>
                        Interaction, Design & Development
                    </div>
                </div>
                <div className="dnfjndjn" style={{ position: 'relative', marginTop: '80px' }}>
                    <div className="dnndmvns">
                        <div
                            className="nndjvnjdvn"
                            onClick={() => window.open("https://luxelayers.vercel.app", "_blank")}
                        >
                            View Site
                        </div>

                        <video src="https://videos.pexels.com/video-files/8533112/8533112-uhd_2560_1440_25fps.mp4" autoPlay muted loop height={"300px"} width={"500px"} />
                    </div>
                    <div className="kcmd">
                        LuxeLayers
                    </div>
                    <div className="kcmd" style={{ fontSize: '15px', marginRight: '100px' }}>
                        Interaction, Design & Development
                    </div>
                </div>
                <div className="dnfjndjn" style={{ position: 'relative', marginTop: '80px' }}>
                    <div className="dnndmvns">
                        <div
                            className="nndjvnjdvn"
                            onClick={() => window.open("https://cryptoforge.vercel.app/", "_blank")}
                        >
                            View Site
                        </div>

                        <video src="https://videos.pexels.com/video-files/4389377/4389377-uhd_2732_1440_30fps.mp4" height={"300px"} width={"500px"} autoPlay muted loop />
                    </div>
                    <div className="kcmd">
                        CryptoBase
                    </div>
                    <div className="kcmd" style={{ fontSize: '15px', marginRight: '100px' }}>
                        Interaction, Design & Development
                    </div>
                </div>
                <div className="dnfjndjn" style={{ position: 'relative', marginTop: '80px', paddingBottom: '80px' }}>
                    <div className="dnndmvns">
                        <div
                            className="nndjvnjdvn"
                            onClick={() => window.open("https://wingedword.vercel.app", "_blank")}
                        >
                            View Site
                        </div>

                        <video src="https://videos.pexels.com/video-files/854545/854545-hd_1920_1080_25fps.mp4" height={"300px"} width={"500px"} autoPlay muted loop />
                    </div>
                    <div className="kcmd">
                        WingedWords
                    </div>
                    <div className="kcmd" style={{ fontSize: '15px', marginRight: '100px' }}>
                        Interaction, Design & Development
                    </div>
                </div>
            </div>) : (<div className="hgvbb" style={{marginLeft:'100vw'}}>

                <div className="dnfjndjn">
                    <div className="dnndmvns" style={{ fontSize: '12px', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', padding: '20px', justifyContent: 'center', alignItems: 'center', color: 'black' }}>
                        VistariRide is a modern cab booking application developed using Flutter, Firebase, Google Maps API, and Razorpay API, designed to offer a seamless, user-friendly experience for both riders and drivers. The app is built using Flutter, a powerful cross-platform framework that allows for the development of a single codebase that works across both iOS and Android platforms. This approach not only accelerates development time but also ensures consistency and a smooth user experience on both platforms. Flutter’s rich set of pre-designed widgets and high performance enable the app to provide a native-like feel with smooth animations and responsive interactions. For backend support, Firebase is used to handle real-time data synchronization, secure user authentication, and scalable cloud storage. Firebase enables the app to instantly update information, such as ride statuses, driver availability, and GPS locations, in real-time, providing users with accurate updates. It also offers robust security for user accounts, ensuring that personal details and payment information are safely stored and accessed. Firebase’s database structure is highly scalable, which is crucial for handling a growing number of users and bookings, ensuring that VistariRide can scale as the user base expands without sacrificing performance. Google Maps API plays a central role in VistariRide by providing real-time location tracking and navigation. The integration allows users to easily track their rides, see nearby available drivers, and view estimated arrival times. For drivers, the Google Maps API helps navigate the most efficient routes, accounting for real-time traffic data and minimizing delays. This accurate and intuitive mapping system ensures a smooth and reliable journey for both riders and drivers. For secure and efficient payments, VistariRide integrates Razorpay API, offering multiple payment options, including credit/debit cards, digital wallets, and UPI. Razorpay ensures smooth transactions, with end-to-end encryption to protect user payment data, providing a safe and hassle-free payment experience for riders. VistariRide leverages advanced technologies such as Flutter, Firebase, Google Maps API, and Razorpay to provide a comprehensive, scalable, and secure ride-hailing platform. It ensures an intuitive, seamless experience for users and drivers, enhancing both convenience and reliability in transportation services.
                    </div>
                    <div className="kcmd">
                        VistaRide
                    </div>
                    <div className="kcmd" style={{ fontSize: '15px', marginRight: '100px' }}>
                        Interaction, Design & Development
                    </div>
                </div>

                <div className="dnfjndjn" style={{ position: 'relative', marginTop: '80px' }}>
                    <div className="dnndmvns" style={{ fontSize: '12px', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', padding: '20px', justifyContent: 'center', alignItems: 'center', color: 'black' }}>
                        VistaFeed is a social media application designed to provide users with a seamless platform to share photos, videos, and interact with friends and followers. The app allows users to post content, engage with other profiles, and explore a variety of media in a clean, intuitive environment. With a focus on simplicity and user engagement, VistaFeed enables users to easily upload and share moments, browse content in a personalized feed, and stay connected with a network of people.

                        The app offers a visually appealing and highly interactive interface that allows users to scroll through a personalized feed, where they can see updates from their connections and discover new content based on their interests. The design is minimalistic yet elegant, providing an enjoyable and effortless browsing experience. Users can like, comment, and share posts, making it easy to engage with others and build a community within the app.

                        VistaFeed also includes features like profile creation, where users can customize their personal space by uploading profile pictures, bio, and other details. The app supports real-time updates, ensuring that content is refreshed instantly, keeping users engaged with the latest posts from their friends and followers. It is designed to keep users connected and allow them to engage in conversations and share experiences in a straightforward and enjoyable manner.

                        For content sharing, VistaFeed offers a simple and intuitive way to upload images and videos. Users can edit their posts with filters, captions, and tags before sharing them with their followers or the wider public. This flexibility allows users to express themselves creatively, making the app not just a platform for connection, but also a medium for self-expression.

                        The app also ensures that privacy and security are prioritized. Users have full control over their posts and can decide who sees their content by adjusting privacy settings. The Firebase-powered backend provides robust user authentication and real-time data synchronization, ensuring that the app functions smoothly and securely. With Firebase, user profiles, posts, and interactions are efficiently managed, offering a seamless experience across multiple devices.

                        VistaFeed is built to scale, offering a highly responsive and reliable platform that grows with its user base. As more users join, the app can handle an increasing amount of content and interactions without compromising on performance. The use of real-time technologies ensures that all content and interactions are updated instantly, creating an engaging and interactive experience for every user.
                    </div>
                    <div className="kcmd">
                        VistaFeedd
                    </div>
                    <div className="kcmd" style={{ fontSize: '15px', marginRight: '100px' }}>
                        Interaction, Design & Development
                    </div>
                </div>
                <div className="dnfjndjn" style={{ position: 'relative', marginTop: '80px' }}>
                    <div className="dnndmvns" style={{ fontSize: '12px', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', padding: '40px', justifyContent: 'center', alignItems: 'center', color: 'black' }}>
                        VidTube is a dynamic video-sharing platform designed to allow users to upload, view, and interact with video content in a seamless and engaging environment. The app provides a space for users to explore various genres of videos, from entertainment and tutorials to music and educational content, offering a personalized viewing experience. With a clean, intuitive interface, VidTube ensures a smooth browsing experience, allowing users to effortlessly discover, watch, and interact with videos.

                        The app’s core feature is its video streaming capability, which allows users to watch high-quality content on demand. With a simple, yet powerful search functionality, users can find videos based on categories, keywords, or trending topics. The personalized feed ensures that users are shown relevant content based on their interests, making it easy to discover new channels, creators, and videos. VidTube also offers a subscription model, allowing users to follow their favorite creators and get notifications when new videos are uploaded, ensuring they never miss out on new content.

                        For content creators, VidTube provides a platform to upload videos, share them with a wide audience, and build their community. Users can easily upload videos directly from their devices, add titles, descriptions, and tags, and manage their content through their personal profile. The app supports video playback, with features like pause, rewind, and full-screen viewing, providing a smooth and interactive experience for viewers.

                        Engagement is a key part of the VidTube experience. Viewers can like, comment, and share videos, fostering a sense of community within the platform. The comment section allows for direct interaction between creators and their audience, while the like and share buttons help increase the visibility of content across the app. These features ensure that the platform remains interactive and encourages users to engage with videos in meaningful ways.

                        VidTube also places a strong emphasis on privacy and security. Users can set their videos to public or private, giving them control over who can view their content. With robust user authentication powered by Firebase, VidTube ensures that profiles, videos, and interactions are secure. Firebase’s real-time database features enable seamless synchronization of content, ensuring that videos, comments, and interactions are instantly updated across all devices.

                        VidTube’s scalable architecture supports an increasing number of users and content, ensuring that the platform remains fast and responsive even as the user base grows. The use of Flutter ensures that the app delivers a smooth performance across both Android and iOS devices, providing a consistent and enjoyable experience for users regardless of the platform they are using. With its seamless video streaming, engagement features, and secure environment, VidTube offers a comprehensive platform for video sharing and consumption.
                    </div>
                    <div className="kcmd">
                        VidTube
                    </div>
                    <div className="kcmd" style={{ fontSize: '15px', marginRight: '100px' }}>
                        Interaction, Design & Development
                    </div>
                </div>
                <div className="dnfjndjn" style={{ position: 'relative', marginTop: '80px' }}>
                    <div className="dnndmvns" style={{ fontSize: '12px', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', padding: '40px', justifyContent: 'center', alignItems: 'center', color: 'black' }}>
                        Luxelayers is a robust e-commerce platform that provides users with an intuitive and seamless shopping experience. Designed to offer a vast range of products across multiple categories, the app allows users to browse, search, and purchase items with ease. From electronics and clothing to home goods and accessories, Luxelayers brings a comprehensive shopping experience to users' fingertips, allowing them to explore a wide variety of high-quality products.

                        The app's clean, user-friendly interface ensures that shoppers can easily navigate through different product categories and find exactly what they need. With advanced search and filter options, users can search for items based on their preferences, such as price range, brand, or features. The app also showcases curated collections and popular items, making it easy for users to discover trending products.

                        Luxelayers places great emphasis on a personalized shopping experience. Users can create accounts and maintain a wishlist of products they are interested in, allowing them to revisit their favorite items whenever they want. The app also tracks user preferences and browsing history, making product recommendations more relevant and tailored to individual tastes.

                        For a smooth shopping experience, Luxelayers integrates features such as a secure and simple checkout process, multiple payment options, and real-time order tracking. The app supports a variety of payment methods, including credit/debit cards, wallets, and online banking, ensuring users can complete their purchases securely and conveniently. Once an order is placed, users can track its status in real time, receiving updates about shipping and delivery.

                        To enhance the shopping experience further, Luxelayers allows users to leave reviews and ratings on products they have purchased, helping others make informed decisions. The rating system provides valuable feedback for both customers and sellers, fostering trust and transparency in the marketplace.

                        The backend of Luxelayers is powered by Firebase, which ensures secure user authentication and data management. Firebase’s real-time database allows for efficient syncing of product information, order statuses, and user interactions, ensuring the app is always up-to-date. Additionally, Firebase enables scalability, allowing Luxelayers to handle an increasing number of users, products, and transactions without compromising performance.

                        The app is developed using Flutter, ensuring high performance and a consistent experience across both Android and iOS platforms. This cross-platform capability allows users to enjoy a seamless shopping experience, whether they are using a smartphone or tablet.

                        Luxelayers is designed to be a reliable and comprehensive e-commerce solution, providing users with a wide selection of products, a secure shopping experience, and personalized recommendations, all while maintaining a high level of performance and scalability.
                    </div>
                    <div className="kcmd">
                        LuxeLayers
                    </div>
                    <div className="kcmd" style={{ fontSize: '15px', marginRight: '100px' }}>
                        Interaction, Design & Development
                    </div>
                </div>
                <div className="dnfjndjn" style={{ position: 'relative', marginTop: '80px' }}>
                    <div className="dnndmvns" style={{ fontSize: '12px', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', padding: '60px', justifyContent: 'center', alignItems: 'center', color: 'black' }}>
                    CryptoBase is a cutting-edge online cryptocurrency trading app that allows users to trade, track, and manage their cryptocurrency investments seamlessly. Designed for both beginners and experienced traders, CryptoBase offers an intuitive platform for buying, selling, and monitoring various cryptocurrencies in real time. With a focus on security, ease of use, and real-time market data, CryptoBase empowers users to make informed trading decisions and stay up-to-date on the latest trends in the cryptocurrency market.

The app's interface is designed to be simple and user-friendly, enabling users to quickly access essential information and tools. CryptoBase allows users to view the live prices of various cryptocurrencies such as Bitcoin, Ethereum, and Litecoin, with real-time data provided through the integration of the **Coinbase API**. This integration ensures that users have access to accurate, up-to-the-minute price information, enabling them to track market movements and execute trades at the optimal time.

CryptoBase provides a secure platform for cryptocurrency trading, utilizing **Firebase** for backend support. Firebase ensures smooth real-time data synchronization, secure user authentication, and cloud-based data storage. The app offers a secure login process, leveraging Firebase's authentication services to protect user accounts and personal information. Additionally, Firebase's real-time database features ensure that the app updates data instantly across devices, allowing users to see their balances, transaction history, and the latest market trends in real time.

For trading functionality, CryptoBase offers a range of features including the ability to place buy and sell orders, view detailed charts, and manage portfolios. The app supports multiple cryptocurrencies, allowing users to diversify their investments and trade a variety of digital assets. Users can also set price alerts for specific cryptocurrencies, notifying them when prices reach a set threshold. This feature helps traders stay on top of market changes without having to constantly monitor prices manually.

CryptoBase's integration with the **Coinbase API** provides accurate and reliable data on crypto market prices and trends. The real-time tracking feature ensures that users are always working with the most current information, which is crucial for making informed decisions in the fast-moving world of cryptocurrency trading. The app also provides access to market analysis tools, helping users to track trends, view price history, and analyze fluctuations.

Developed using **Flutter**, CryptoBase offers a high-performance, cross-platform experience, ensuring that users enjoy a smooth, responsive interface across both Android and iOS devices. Flutter’s ability to deliver a native-like experience ensures that the app remains fast and efficient, even during high traffic periods.

CryptoBase is designed to scale as the user base grows, with robust cloud infrastructure powered by Firebase ensuring that the app can handle an increasing number of transactions, users, and market data without compromising on performance or security. With its user-friendly interface, secure trading environment, and real-time market tracking, CryptoBase is the ideal app for those looking to enter or enhance their presence in the world of cryptocurrency trading.
                    </div>
                    <div className="kcmd">
                        CryptoBase
                    </div>
                    <div className="kcmd" style={{ fontSize: '15px', marginRight: '100px' }}>
                        Interaction, Design & Development
                    </div>
                </div>
                <div className="dnfjndjn" style={{ position: 'relative', marginTop: '80px', }}>
                    <div className="dnndmvns" style={{ fontSize: '12px', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', padding: '40px', justifyContent: 'center', alignItems: 'center', color: 'black' }}>
                        WingedWords is a dynamic social media platform designed to enable users to share their thoughts, updates, and connect with others in real time. The app offers a space for users to post short messages, engage in conversations, and stay updated on trending topics. Whether sharing personal thoughts, news, or opinions, WingedWords provides a platform for self-expression and interaction.

                        The app's interface is clean and simple, making it easy for users to navigate and post content quickly. With a focus on real-time updates, WingedWords allows users to share text-based posts, as well as interact with posts through likes, comments, and shares. This fosters a sense of community where users can engage with their followers and others on the platform. The ability to follow other users and get instant updates ensures that users are always in the loop on the latest content, whether it’s from friends, celebrities, or influencers.

                        WingedWords also allows for the creation of profiles, where users can customize their bio, profile picture, and background image, providing a personal touch to their online presence. Through personalized feeds, users can view posts from people they follow, discover trending topics, and explore content related to their interests. The ability to search for specific posts, users, and hashtags makes content discovery easy, ensuring that users can find relevant and interesting material.

                        The app emphasizes real-time interaction and engagement. Users can reply to posts, start discussions, and participate in conversations with others on various topics. This interactive nature encourages a rich, engaging experience that keeps users connected and involved with the community. Additionally, the app supports notifications to alert users about new activity, ensuring that they never miss a post or interaction.

                        The backend of WingedWords is powered by Firebase, offering real-time data synchronization, secure user authentication, and seamless content management. Firebase ensures that all posts, comments, and interactions are updated instantly across all devices, allowing users to experience live engagement without delays. It also provides a secure environment for user accounts, ensuring that personal data and activities are well-protected.

                        Developed using Flutter, WingedWords is available across both Android and iOS platforms, providing a consistent and high-performance experience. Flutter's capabilities allow the app to deliver a native-like performance with smooth transitions, ensuring that users enjoy a responsive and engaging experience.

                        WingedWords is designed for scalability, making it capable of handling an increasing number of users and interactions without compromising speed or performance. It offers a reliable platform for users to share their ideas, connect with others, and stay informed in a dynamic digital space. With its user-friendly interface, real-time engagement, and secure environment, WingedWords provides a comprehensive social media experience for all users.
                    </div>
                    <div className="kcmd">
                        WingedWords
                    </div>
                    <div className="kcmd" style={{ fontSize: '15px', marginRight: '100px' }}>
                        Interaction, Design & Development
                    </div>
                </div>
                <div className="dnfjndjn" style={{ position: 'relative', marginTop: '80px', paddingBottom: '80px' }}>
                    <div className="dnndmvns" style={{ fontSize: '12px', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', padding: '20px', justifyContent: 'center', alignItems: 'center', color: 'black' }}>
                        VistariRide Driver is a modern cab booking application developed using Flutter, Firebase, Google Maps API, and Razorpay API, designed to offer a seamless, user-friendly experience for both riders and drivers. The app is built using Flutter, a powerful cross-platform framework that allows for the development of a single codebase that works across both iOS and Android platforms. This approach not only accelerates development time but also ensures consistency and a smooth user experience on both platforms. Flutter’s rich set of pre-designed widgets and high performance enable the app to provide a native-like feel with smooth animations and responsive interactions. For backend support, Firebase is used to handle real-time data synchronization, secure user authentication, and scalable cloud storage. Firebase enables the app to instantly update information, such as ride statuses, driver availability, and GPS locations, in real-time, providing users with accurate updates. It also offers robust security for user accounts, ensuring that personal details and payment information are safely stored and accessed. Firebase’s database structure is highly scalable, which is crucial for handling a growing number of users and bookings, ensuring that VistariRide Driver can scale as the user base expands without sacrificing performance. Google Maps API plays a central role in VistariRide Driver by providing real-time location tracking and navigation. The integration allows users to easily track their rides, see nearby available drivers, and view estimated arrival times. For drivers, the Google Maps API helps navigate the most efficient routes, accounting for real-time traffic data and minimizing delays. This accurate and intuitive mapping system ensures a smooth and reliable journey for both riders and drivers. For secure and efficient payments, VistariRide Driver integrates Razorpay API, offering multiple payment options, including credit/debit cards, digital wallets, and UPI. Razorpay ensures smooth transactions, with end-to-end encryption to protect user payment data, providing a safe and hassle-free payment experience for riders. VistariRide Driver leverages advanced technologies such as Flutter, Firebase, Google Maps API, and Razorpay to provide a comprehensive, scalable, and secure ride-hailing platform. It ensures an intuitive, seamless experience for users and drivers, enhancing both convenience and reliability in transportation services.
                    </div>
                    <div className="kcmd">
                        VistaRide Driver
                    </div>
                    <div className="kcmd" style={{ fontSize: '15px', marginRight: '100px' }}>
                        Interaction, Design & Development
                    </div>
                </div>
            </div>)}
        </div>
    )
}
