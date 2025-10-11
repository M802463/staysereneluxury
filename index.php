<!DOCTYPE html>
<html lang="en">

<head>
    <?php include "includes/head.php"; ?>
</head>

<body>
    <?php include "includes/header.php"; ?>
    <div id="smooth-wrapper">
        <div id="smooth-content">
            <!-- all your page content here -->
            <div class="banner button-scroll">
                <div class="swiper banner-swiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide banner-slide"
                            style="background-image: url('assets/images/banner1.jpg');">
                            <div class="banner-content">
                                <h2>Tranqvilla</h2>
                                <p>One of the best features of this villa is the private swimming pool, which can be
                                    accessed directly from the hall.</p>
                                <a href="#">Explore</a>
                            </div>
                        </div>

                        <div class="swiper-slide banner-slide"
                            style="background-image: url('assets/images/banner2.jpg');">
                            <div class="banner-content">
                                <h2>Midnight Alpine</h2>
                                <p>A-Shape Villa – the most luxurious villa of Stay Serene Luxury. A 2BHK villa in
                                    Murbad, best for couples, families, or friends.</p>
                                <a href="#">Discover</a>
                            </div>
                        </div>

                        <div class="swiper-slide banner-slide"
                            style="background-image: url('assets/images/banner3.jpg');">
                            <div class="banner-content">
                                <h2>Nature’s Touch</h2>
                                <p>Immerse yourself in the beauty of untouched natural landscapes.</p>
                                <a href="#">Book Now</a>
                            </div>
                        </div>

                        <!-- <div class="swiper-slide banner-slide"
                            style="background-image: url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80');">
                            <div class="banner-content">
                                <h2>Urban Luxury</h2>
                                <p>Stay in the heart of the city with all modern amenities at your fingertips.</p>
                                <a href="#">See More</a>
                            </div>
                        </div> -->
                    </div>

                    <div class="banner-button-next">
                        <div class="nav-thumb"></div>
                    </div>
                    <div class="banner-button-prev">
                        <div class="nav-thumb"></div>
                    </div>
                </div>
            </div>

            <div class="col_sm1">
                <div class="top">
                    <div class="booking-form">
                        <!-- Villa Dropdown -->
                        <div class="custom-select" id="villaDropdown">
                            <label class="input-label">Villas</label>
                            <div class="select-selected">Select Villa</div>
                            <div class="select-items">
                                <div data-value="Villa Sunshine">Villa Sunshine</div>
                                <div data-value="Villa Paradise">Villa Paradise</div>
                                <div data-value="Villa Oceanview">Villa Oceanview</div>
                                <div data-value="Villa Serenity">Villa Serenity</div>
                            </div>
                        </div>

                        <!-- Date Picker -->
                        <div class="custom-select">
                            <label class="input-label">Dates</label>
                            <input type="text" id="dateRange" placeholder="Select dates" readonly>
                        </div>

                        <!-- Guests Dropdown -->
                        <div class="custom-select" id="guestSelect">
                            <label class="input-label">Guests</label>
                            <div class="select-selected">Guests</div>
                            <div class="guest-dropdown" id="guestDropdown">
                                <div class="guest-row">
                                    <span class="guest-label">Adults</span>
                                    <div class="guest-controls">
                                        <button class="minus" data-type="adult">−</button>
                                        <span class="guest-count" id="adultCount">1</span>
                                        <button class="plus" data-type="adult">+</button>
                                    </div>
                                </div>
                                <div class="guest-row">
                                    <span class="guest-label">Children</span>
                                    <div class="guest-controls">
                                        <button class="minus" data-type="child">−</button>
                                        <span class="guest-count" id="childCount">0</span>
                                        <button class="plus" data-type="child">+</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Submit -->
                        <button id="searchBtn">CHECK AVAILABILITY</button>
                    </div>
                </div>
            </div>

            <div class="col_sm1 bg_clr3"> <br> <br>
                <div class="top">
                    <div class="room-suit-head margin-1">
                        <h3>About Staysereneluxury</h3>
                        <h2>Welcome To Staysereneluxury Hotel In Natural Surroundings</h2>
                    </div>
                    <div class="swiper mySwiper">
                        <div class="swiper-wrapper">
                            <!-- Slide 1 -->
                            <div class="swiper-slide">
                                <div class="card">
                                    <img src="assets/images/tranqvilla-slide-1.jpg" alt="Card 1" />
                                    <h3>Tranqvilla </h3>
                                    <p>Hilltop luxury villa</p>
                                    <a class="slide-learn-more" href="#">Learn More <img
                                            src="assets/images/thin-arrow.png" alt=""></a>
                                </div>
                            </div>
                            <!-- Slide 2 -->
                            <div class="swiper-slide">
                                <div class="card">
                                    <img src="assets/images/midnightvilla-slide-2.jpg" alt="Card 2" />
                                    <h3>Midnight Alpine Villa</h3>
                                    <p>Beautiful mountain view.</p>
                                    <a class="slide-learn-more" href="#">Learn More <img
                                            src="assets/images/thin-arrow.png" alt=""></a>

                                </div>
                            </div>
                            <!-- Slide 3 -->
                            <div class="swiper-slide">
                                <div class="card">
                                    <img src="assets/images/shamiyanavilla-slide-3.jpg" alt="Card 3" />
                                    <h3>Shamiyana Luxury Tent I Villa</h3>
                                    <p>Beautiful mountain view.</p>
                                    <a class="slide-learn-more" href="#">Learn More <img
                                            src="assets/images/thin-arrow.png" alt=""></a>

                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="card">
                                    <img src="assets/images/shamiyanavilla2-slide-3.jpg" alt="Card 1" />
                                    <h3>Shamiyana Luxury Tent II Villa</h3>
                                    <p>Beautiful mountain view.</p>
                                    <a class="slide-learn-more" href="#">Learn More <img
                                            src="assets/images/thin-arrow.png" alt=""></a>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="clear"></div>
                </div>
                <div class="clear"></div>
            </div>

            <div class="col_sm1 bg_clr3 about-section"><br><br>
                <div class="top">
                    <div class="col_sm2">
                        <div class="img-box">
                            <div class="img-area">
                                <div class="img-paralax">
                                    <img src="assets/images/about_5.jpg" alt="">
                                </div>

                            </div>
                            <div class="about-wrapp">
                                <div class="img_2">
                                    <img src="assets/images/about_6.jpg" class="img" alt="">
                                </div>
                                <div class="box-content">
                                    <div class="award"><img src="assets/images/logo.png" class="img" alt=""></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col_sm2 about-content">
                        <div class="room-suit-head">
                            <h3>About Staysereneluxury</h3>
                            <h2>Welcome To Staysereneluxury Hotel In Natural Surroundings</h2>
                        </div>
                        <p>Stay Serene Luxury is a top-rated resort in Murbad offering elegant villas and luxury tents
                            surrounded by nature. Designed for families, couples, and friends, our villas feature
                            private pools, patios, and scenic views. Enjoy delicious Jain, veg, and non-veg meals,
                            indoor-outdoor games, bonfire nights, and serene comfort that make every stay relaxing,
                            memorable, and truly luxurious.</p>
                        <div class="stats-section">
                            <div class="stats-container">
                                <div class="stat-item">
                                    <div class="stat-number">7+</div>
                                    <div class="stat-label">Luxury Rooms</div>
                                </div>
                                <div class="stat-item">
                                    <div class="stat-number">4.8+</div>
                                    <div class="stat-label">Guest Rating</div>
                                </div>
                                <div class="stat-item">
                                    <div class="stat-number">128k+</div>
                                    <div class="stat-label">Clients Happy</div>
                                </div>
                            </div>
                            <div class="stats-actions">
                                <a href="about-us.php" class="btn-primary">LEARN MORE </a>
                                <a href="villa.php" class="btn-secondary"> EXPLORE ROOMS </a>
                            </div>
                        </div>
                    </div>
                    <div class="clear"></div>
                </div>
                <div class="col_sm1 relative bg_img"> <br>
                    <div class="top">
                        <div class="room-suit-head2 title-absolute hidInMob">
                            <h3>Gallery</h3>
                            <h2>Explore Our Beautiful Gallery</h2>
                            <p>We provide you with the best quality of services and <br> facilities for all your travel and place needs</p>
                        </div>
                        <div class="room-suit-head2 hidInDesk margin-1">
                            <h3>Gallery</h3>
                            <h2>Explore Our Beautiful Gallery</h2>
                            <p>We provide you with the best quality of services and <br> facilities for all your travel and place needs</p>
                        </div>
                        <div class="col_sm3_3 gallery-card_wrapp">
                            <div class="gallery-card">
                                <div class="box-img">
                                    <img src="assets/images/gallery_3_1.jpg" class="img" alt="gallery image">
                                </div>
                            </div>

                            <div class="gallery-card mrg-top">
                                <div class="box-img">
                                    <img src="assets/images/gallery_3_1.jpg" class="img" alt="gallery image">
                                </div>
                            </div>
                        </div>

                        <div class="col_sm3_3 gallery-card_wrapp gallery-img-margin">
                            <div class="gallery-card">
                                <div class="box-img">
                                    <img src="assets/images/gallery_3_1.jpg" class="img" alt="gallery image">
                                </div>
                            </div>
                            <div class="gallery-card mrg-top">
                                <div class="box-img">
                                    <img src="assets/images/gallery_3_1.jpg" class="img" alt="gallery image">
                                </div>
                            </div>
                        </div>

                        <div class="col_sm3_3 gallery-card_wrapp gallery-img-margin2 hidInMob">
                            <div class="gallery-card">
                                <div class="box-img">
                                    <img src="assets/images/gallery_3_1.jpg" class="img" alt="gallery image">
                                </div>
                            </div>
                            <div class="gallery-card mrg-top">
                                <div class="box-img">
                                    <img src="assets/images/gallery_3_1.jpg" class="img" alt="gallery image">
                                </div>
                            </div>
                        </div>
                        <div class="col_sm3_3 hidInDesk">
                            <div class="gallery-card">
                                <div class="box-img">
                                    <img src="assets/images/gallery_3_1.jpg" class="img" alt="gallery image">
                                </div>
                            </div>
                        </div>
                        <div class="col_sm3_3 hidInDesk">
                            <div class="gallery-card">
                                <div class="box-img">
                                    <img src="assets/images/gallery_3_1.jpg" class="img" alt="gallery image">
                                </div>
                            </div>
                        </div>
                        <div class="absolute-btn hidInMob">
                            <a href="#" class="gal-btn">Explore More</a>
                        </div>
                        <a href="#" class="gal-btn hidInDesk margin-1">Explore More</a>
                        <div class="clear"></div>
                    </div> <br><br>
                    <div class="clear"></div>
                </div>

                <!-- Statistics Section -->
            </div>

            <!-- Add this testimonial section before the footer -->
            <div class="col_sm1 bg_clr3 testimonial-section"><br><br>
                <div class="top">
                    <div class="room-suit-head margin-1">
                        <h3>Testimonials</h3>
                        <h2>What Our Guests Say About Us</h2>
                    </div>

                    <div class="testimonial-slider-container">
                        <div class="swiper testimonialSwiper">
                            <div class="swiper-wrapper">
                                <!-- Testimonial 1 -->
                                <div class="swiper-slide">
                                    <div class="dbl-invrted">
                                        <img src="assets/images/double-quotes.png" class="img" alt="">
                                    </div>
                                    <p class="box-text">Ready to book your vacation? Our hotel booking category provides an extensive array of choices, from lavish resorts to economical lodgings, guaranteeing a delightful and unforgettable experience.</p>
                                    <div class="review-info">
                                        <div class="review-name">
                                            <h2>Name</h2>
                                            <p>designation</p>
                                        </div>
                                        <div class="rating-review">
                                            <div class="review-profile"><img src="assets/images/client-1.jpg" class="img" alt=""></div>
                                            <div class="rating">
                                                <span class="star">★</span>
                                                <span>4.5</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Testimonial 2 -->
                                <div class="swiper-slide">
                                    <div class="dbl-invrted">
                                        <img src="assets/images/double-quotes.png" class="img" alt="">
                                    </div>
                                    <p class="box-text">Ready to book your vacation? Our hotel booking category provides an extensive array of choices, from lavish resorts to economical lodgings, guaranteeing a delightful and unforgettable experience.</p>
                                    <div class="review-info">
                                        <div class="review-name">
                                            <h2>Name</h2>
                                            <p>designation</p>
                                        </div>
                                        <div class="rating-review">
                                            <div class="review-profile"><img src="assets/images/client-1.jpg" class="img" alt=""></div>
                                            <div class="rating">
                                                <span class="star">★</span>
                                                <span>4.5</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Testimonial 3 -->
                                <div class="swiper-slide">
                                    <div class="dbl-invrted">
                                        <img src="assets/images/double-quotes.png" class="img" alt="">
                                    </div>
                                    <p class="box-text">Ready to book your vacation? Our hotel booking category provides an extensive array of choices, from lavish resorts to economical lodgings, guaranteeing a delightful and unforgettable experience.</p>
                                    <div class="review-info">
                                        <div class="review-name">
                                            <h2>Name</h2>
                                            <p>designation</p>
                                        </div>
                                        <div class="rating-review">
                                            <div class="review-profile"><img src="assets/images/client-1.jpg" class="img" alt=""></div>
                                            <div class="rating">
                                                <span class="star">★</span>
                                                <span>4.5</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Testimonial 4 -->
                                <div class="swiper-slide">
                                    <div class="dbl-invrted">
                                        <img src="assets/images/double-quotes.png" class="img" alt="">
                                    </div>
                                    <p class="box-text">Ready to book your vacation? Our hotel booking category provides an extensive array of choices, from lavish resorts to economical lodgings, guaranteeing a delightful and unforgettable experience.</p>
                                    <div class="review-info">
                                        <div class="review-name">
                                            <h2>Name</h2>
                                            <p>designation</p>
                                        </div>
                                        <div class="rating-review">
                                            <div class="review-profile"><img src="assets/images/client-1.jpg" class="img" alt=""></div>
                                            <div class="rating">
                                                <span class="star">★</span>
                                                <span>4.5</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Testimonial 5 -->
                                <div class="swiper-slide">
                                    <div class="dbl-invrted">
                                        <img src="assets/images/double-quotes.png" class="img" alt="">
                                    </div>
                                    <p class="box-text">Ready to book your vacation? Our hotel booking category provides an extensive array of choices, from lavish resorts to economical lodgings, guaranteeing a delightful and unforgettable experience.</p>
                                    <div class="review-info">
                                        <div class="review-name">
                                            <h2>Name</h2>
                                            <p>designation</p>
                                        </div>
                                        <div class="rating-review">
                                            <div class="review-profile"><img src="assets/images/client-1.jpg" class="img" alt=""></div>
                                            <div class="rating">
                                                <span class="star">★</span>
                                                <span>4.5</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
                <div class="clear"></div>
            </div>

            <?php include "includes/footer.php"; ?>
        </div>
    </div>


    <script src="assets/js/local-cdn/gsap.min.js"></script>
    <script src="assets/js/local-cdn/scrollTrigger.min.js"></script>
    <!-- ScrollSmoother requires ScrollTrigger -->
    <script src="assets/js/local-cdn/scrollSmoother.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
    <script src="assets/js/script.js"></script>
    <!-- Swiper JS -->
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

</body>

</html>