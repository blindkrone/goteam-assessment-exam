<template>
    <div>
        <header>
            <div class="left">
                <h2><NuxtLink to="/">GOTEAM</NuxtLink></h2>
                <ul>
                    <li><a href="javascript:;">Careers</a></li>
                    <li><a href="javascript:;">Find your Role</a></li>
                </ul>
            </div>

            <div class="middle">
                <input type="text" placeholder="Type for job title or role">
                <button><i><font-awesome-icon icon="fa-solid fa-magnifying-glass" size="lg" /></i>Search</button>
            </div>

            <div class="right">
                <div>
                    <h4>Reyven Biloy</h4>
                    <a href="mailto:reyvenb@gmail.com">reyvenb@gmail.com</a>
                </div>
                <div class="image_placeholder"></div>
                <font-awesome-icon icon="fa-solid fa-angle-down" />
            </div>
        </header>

        <nav class="sidenav">
            <ul>
                <li>
                    <button type="button"><font-awesome-icon icon="fa-solid fa-user" size="lg" /></button>
                    Profile
                </li>
                <li>
                    <button type="button"><font-awesome-icon icon="fa-solid fa-file-lines" size="lg" /></button>
                    Resume / CV
                </li>
                <li>
                    <button type="button"><font-awesome-icon icon="fa-solid fa-chart-column" size="lg" /></button>
                    Assessment
                </li>
                <li>
                    <button type="button"><font-awesome-icon icon="fa-solid fa-video" size="lg" /></button>
                    Video Script
                </li>
            </ul>

            <hr />
            
            <ul>
                <li>
                    <button type="button"><font-awesome-icon icon="fa-solid fa-briefcase" size="lg" /></button>
                    Application Tracking
                </li>
                <li>
                    <button type="button"><font-awesome-icon icon="fa-solid fa-bookmark" size="lg" /></button>
                    Bookmarked
                </li>
                <li>
                    <button type="button"><font-awesome-icon icon="fa-solid fa-bell" size="lg" /></button>
                    Notifications
                    <span>1</span>
                </li>
                <li>
                    <button type="button"><font-awesome-icon icon="fa-solid fa-chart-line" size="lg" /></button>
                    Activity Logs
                </li>
                <li>
                    <button type="button"><font-awesome-icon icon="fa-solid fa-gear" size="lg" /></button>
                    Settings
                </li>
            </ul>

            <div class="copyright">
                <p>Copyright 2018 - 2023. All Rights Reserved</p>
                <div>
                    <a href="javascript:;">Terms of Use</a> • <a href="javascript:;">Privacy Policy</a>
                </div>
            </div>
        </nav>

        <div class="main">
            <div class="reminders">
                <h1>Welcome, Reyven!</h1>
                <p><span>You are almost done!</span> To further strengthen your profile, it is highly recommended for you to complete the 4 sections of your application</p>
            
                <div class="absolute_checkbox">
                    <input type="checkbox" id="remind">
                    <label for="remind">Don't remind me again</label>
                    <button type="button"><font-awesome-icon icon="fa-solid fa-x" size="sm" /></button>
                </div>

                <div>
                    <ul>
                        <li>
                            <i><font-awesome-icon :icon="['fas', 'user']" /></i>
                            <div>
                                <div>Applicant Profile</div>
                                <div class="progress_bar">
                                    <div class="actual"></div>
                                    <span>75%</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <i><font-awesome-icon :icon="['fas', 'file-lines']" /></i>
                            <div>
                                <div>Resume / CV</div>
                                <div class="progress_bar">
                                    <div class="actual"></div>
                                    <span>50%</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <i><font-awesome-icon :icon="['fas', 'chart-column']" /></i>
                            <div>
                                <div>Assessment Score</div>
                                <div class="progress_bar">
                                    <div class="actual"></div>
                                    <span>0%</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <i><font-awesome-icon :icon="['fas', 'tv']" /></i>
                            <div>
                                <div>Video Introduction</div>
                                <div class="progress_bar">
                                    <div class="actual"></div>
                                    <span>0%</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div>
                <div class="main_content">
                    <div class="introduction_profile">
                        <div class="edit">
                            <font-awesome-icon icon="fa-solid fa-pencil" size="sm" />
                        </div>
                        <div class="img_placeholder">
                            <div></div>
                        </div>
                        <div class="profile">
                            <h2>Reyven S. Biloy <span>UI/UX Designer</span></h2>
                            <div class="education_details">
                                <div>
                                    <i><font-awesome-icon icon="fa-solid fa-graduation-cap" size="sm" /></i>
                                    Bachelor of Science in Computer Science
                                </div>
                                <div class="more_education_details">
                                    <div>
                                        <i><font-awesome-icon icon="fa-solid fa-briefcase" size="sm" /></i>
                                        12 years
                                    </div>
                                    <div>
                                        <i><font-awesome-icon icon="fa-solid fa-calendar" size="sm" /></i>
                                        Immediately
                                    </div>
                                    <div>
                                        <i><font-awesome-icon icon="fa-solid fa-dollar-sign" size="sm" /></i>
                                        Php 35,000
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bottom_details">
                        <i class="edit"><font-awesome-icon icon="fa-solid fa-pencil" size="sm" /></i>
                        <div class="details">
                            <h4>General Details</h4>
                            <div class="title">
                                <div>Date of Birth</div>
                                <div>07 July 1986</div>
                            </div>
                            <div class="title">
                                <div>Gender</div>
                                <div>Male</div>
                            </div>
                            <div class="title">
                                <div>Civil Status</div>
                                <div>Married</div>
                            </div>
                            <div class="title">
                                <div>Nationality</div>
                                <div>Filipino</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="bottom_details">
                        <i class="edit"><font-awesome-icon icon="fa-solid fa-pencil" size="sm" /></i>
                        <div class="details">
                            <h4>Professional Status</h4>
                            <div class="title">
                                <div>Recent Job Title</div>
                                <div>Web Designer and Developer</div>
                            </div>
                            <div class="title">
                                <div>Interview Availability</div>
                                <div>-</div>
                            </div>
                            <div class="title">
                                <div>Allowance (Non-Taxable)</div>
                                <div>-</div>
                            </div>
                            <div class="title">
                                <div>Pre-employement Leaves</div>
                                <div>07 July - Birthday</div>
                            </div>
                            <div class="title">
                                <div>Where can you work?</div>
                                <div>Office and Home</div>
                            </div>
                            <div class="title">
                                <div>Estimate Travel Time to Office</div>
                                <div>15 mins</div>
                            </div>
                            <div class="title">
                                <div>Connection Type</div>
                                <div>Globe Broadband</div>
                            </div>
                            <div class="title">
                                <div>Website / Portfolio</div>
                                <div>-</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="bottom_details">
                        <i class="edit"><font-awesome-icon icon="fa-solid fa-pencil" size="sm" /></i>
                        <div class="details">
                            <h4>Preferences</h4>
                            <div class="title">
                                <div>Day Shift</div>
                                <div>-</div>
                            </div>
                            <div class="title">
                                <div>Mid Shift</div>
                                <div>-</div>
                            </div>
                            <div class="title">
                                <div>Night Shift</div>
                                <div>-</div>
                            </div>
                            <div class="title">
                                <div>English Only Policy (EOP)</div>
                                <div>-</div>
                            </div>
                            <div class="title">
                                <div>Where did you hear us?</div>
                                <div>-</div>
                            </div>
                            <div class="title">
                                <div>Marketing Permission</div>
                                <div>-</div>
                            </div>
                            <div class="title">
                                <div>Referral</div>
                                <div>-</div>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="side_content">
                    <div class="video_introduction">
                        <h4>Video Introduction</h4>
                        <div class="video_placeholder"></div>
                    </div>

                    <div class="profile_completion">
                        <h4>Profile Completion</h4>
                        <div class="progress"><span>100%</span></div>

                        <div class="award">
                            <h5>Well done, Reyven!</h5>
                            <img src="/awards.png" alt="">
                        </div>

                        <p>You have one of the strongest professional profile in our talent pool. Expect progress on your application at any time soon.</p>
                    </div>

                    <div class="profile_recommendation">
                        <h4>Profile Completion</h4>
                        <div class="progress">
                            <div class="actual"></div>
                            <span>50%</span>
                        </div>

                        <div>
                            <h5><i><font-awesome-icon :icon="['fas', 'angle-up']" /></i>Hide Recommendation</h5>

                            <div class="recommendation_list">
                                <p>Fill-up the following items to strengthen your profile. This can help us matching your profile and increase your changes of landing into your desired role.</p>

                                <ul>
                                    <li>Share <a href="javascript:;">Date of Birth</a></li>
                                    <li>Specify <a href="javascript:;">Current Monthly Salary</a></li>
                                    <li>Add one(1) <a href="javascript:;">Character Reference</a></li>
                                    <li>Add <a href="javascript:;">Current Address</a></li>
                                    <li>Add at least five (5) items in <a href="javascript:;">Other Skills</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>