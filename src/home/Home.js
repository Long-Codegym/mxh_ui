const Home = () =>{
    return(
        <>
            <section>
                <div className="gap2 gray-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row merged20" id="page-contents">
                                    <div className="col-lg-3">
                                        <aside className="sidebar static left">
                                            <div className="widget">
                                                <div className="weather-widget low-opacity bluesh">
                                                    <div
                                                        className="bg-image"
                                                        style={{
                                                            backgroundImage: "url(images/resources/weather.jpg)"
                                                        }}
                                                    />
                                                    <span className="refresh-content">
                      <i className="fa fa-refresh" />
                    </span>
                                                    <div className="weather-week">
                                                        <div className="icon sun-shower">
                                                            <div className="cloud" />
                                                            <div className="sun">
                                                                <div className="rays" />
                                                            </div>
                                                            <div className="rain" />
                                                        </div>
                                                    </div>
                                                    <div className="weather-infos">
                                                        <span className="weather-tem">25</span>
                                                        <h3>
                                                            Cloudy Skyes<i>Sicklervilte, New Jersey</i>
                                                        </h3>
                                                        <div className="weather-date skyblue-bg">
                        <span>
                          MAY<strong>21</strong>
                        </span>
                                                        </div>
                                                    </div>
                                                    <div className="monthly-weather">
                                                        <ul>
                                                            <li>
                                                                <span>Sun</span>
                                                                <a href="#" title="">
                                                                    <i className="wi wi-day-sunny" />
                                                                </a>
                                                                <em>40°</em>
                                                            </li>
                                                            <li>
                                                                <span>Mon</span>
                                                                <a href="#" title="">
                                                                    <i className="wi wi-day-cloudy" />
                                                                </a>
                                                                <em>10°</em>
                                                            </li>
                                                            <li>
                                                                <span>Tue</span>
                                                                <a href="#" title="">
                                                                    <i className="wi wi-day-hail" />
                                                                </a>
                                                                <em>20°</em>
                                                            </li>
                                                            <li>
                                                                <span>Wed</span>
                                                                <a href="#" title="">
                                                                    <i className="wi wi-day-lightning" />
                                                                </a>
                                                                <em>34°</em>
                                                            </li>
                                                            <li>
                                                                <span>Thu</span>
                                                                <a href="#" title="">
                                                                    <i className="wi wi-day-showers" />
                                                                </a>
                                                                <em>22°</em>
                                                            </li>
                                                            <li>
                                                                <span>Fri</span>
                                                                <a href="#" title="">
                                                                    <i className="wi wi-day-windy" />
                                                                </a>
                                                                <em>26°</em>
                                                            </li>
                                                            <li>
                                                                <span>Sat</span>
                                                                <a href="#" title="">
                                                                    <i className="wi wi-day-sunny-overcast" />
                                                                </a>
                                                                <em>30°</em>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Weather Widget */}
                                            </div>
                                            {/* weather widget*/}
                                            <div className="widget whitish low-opacity">
                                                <div
                                                    style={{
                                                        backgroundImage: "url(images/resources/dob2.png)"
                                                    }}
                                                    className="bg-image"
                                                />
                                                <div className="dob-head">
                                                    <img src="images/resources/sug-page-5.jpg" alt="" />
                                                    <span>22nd Birthday</span>
                                                    <div className="dob">
                                                        <i>19</i>
                                                        <span>September</span>
                                                    </div>
                                                </div>
                                                <div className="dob-meta">
                                                    <figure>
                                                        <img src="images/resources/dob-cake.gif" alt="" />
                                                    </figure>
                                                    <h6>
                                                        <a href="#" title="">
                                                            Lucy Carbel
                                                        </a>{" "}
                                                        valentine's birthday
                                                    </h6>
                                                    <p>leave a message with your best wishes on his profile.</p>
                                                </div>
                                            </div>
                                            {/* birthday widget */}
                                            <div className="widget">
                                                <h4 className="widget-title">Twitter feed</h4>
                                                <ul
                                                    className="twiter-feed ps-container ps-theme-default ps-active-y"
                                                    data-ps-id="c8f1cda6-28bf-614b-90fd-db48739beff1"
                                                >
                                                    <li>
                                                        <i className="fa fa-twitter" />
                                                        <span>
                        <i>jhon william</i>
                        @jhonwilliam
                      </span>
                                                        <p>
                                                            tomorrow with the company we were working and 5 child
                                                            run away from the working place.{" "}
                                                            <a href="#" title="">
                                                                #daydream5k
                                                            </a>{" "}
                                                        </p>
                                                        <em>2 hours ago</em>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-twitter" />
                                                        <span>
                        <i>Kelly watson</i>
                        @kelly
                      </span>
                                                        <p>
                                                            tomorrow with the company we were working and 5 child
                                                            run away from the working place.{" "}
                                                            <a href="#" title="">
                                                                #daydream5k
                                                            </a>{" "}
                                                        </p>
                                                        <em>2 hours ago</em>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-twitter" />
                                                        <span>
                        <i>Jony bravo</i>
                        @jonibravo
                      </span>
                                                        <p>
                                                            tomorrow with the company we were working and 5 child
                                                            run away from the working place.{" "}
                                                            <a href="#" title="">
                                                                #daydream5k
                                                            </a>{" "}
                                                        </p>
                                                        <em>2 hours ago</em>
                                                    </li>
                                                    <div
                                                        className="ps-scrollbar-x-rail"
                                                        style={{ left: 0, bottom: 0 }}
                                                    >
                                                        <div
                                                            className="ps-scrollbar-x"
                                                            tabIndex={0}
                                                            style={{ left: 0, width: 0 }}
                                                        />
                                                    </div>
                                                    <div
                                                        className="ps-scrollbar-y-rail"
                                                        style={{ top: 0, height: 395, right: 0 }}
                                                    >
                                                        <div
                                                            className="ps-scrollbar-y"
                                                            tabIndex={0}
                                                            style={{ top: 0, height: 336 }}
                                                        />
                                                    </div>
                                                </ul>
                                            </div>
                                            {/* twitter feed*/}
                                            <div className="advertisment-box">
                                                <h4 className="">advertisment</h4>
                                                <figure>
                                                    <a href="#" title="Advertisment">
                                                        <img src="images/resources/ad-widget.gif" alt="" />
                                                    </a>
                                                </figure>
                                            </div>
                                            {/* advertisment box */}
                                            <div className="widget">
                                                <h4 className="widget-title">Shortcuts</h4>
                                                <ul className="naves">
                                                    <li>
                                                        <i className="ti-clipboard" />
                                                        <a href="newsfeed.html" title="">
                                                            News feed
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <i className="ti-mouse-alt" />
                                                        <a href="inbox.html" title="">
                                                            Inbox
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <i className="ti-files" />
                                                        <a href="fav-page.html" title="">
                                                            My pages
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <i className="ti-user" />
                                                        <a href="timeline-friends.html" title="">
                                                            friends
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <i className="ti-image" />
                                                        <a href="timeline-photos.html" title="">
                                                            images
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <i className="ti-video-camera" />
                                                        <a href="timeline-videos.html" title="">
                                                            videos
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <i className="ti-comments-smiley" />
                                                        <a href="messages.html" title="">
                                                            Messages
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <i className="ti-bell" />
                                                        <a href="notifications.html" title="">
                                                            Notifications
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <i className="ti-share" />
                                                        <a href="people-nearby.html" title="">
                                                            People Nearby
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-bar-chart-o" />
                                                        <a href="insights.html" title="">
                                                            insights
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <i className="ti-power-off" />
                                                        <a href="landing.html" title="">
                                                            Logout
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            {/* Shortcuts */}
                                            <div className="widget">
                                                <h4 className="widget-title">Recent Activity</h4>
                                                <ul className="activitiez">
                                                    <li>
                                                        <div className="activity-meta">
                                                            <i>10 hours Ago</i>
                                                            <span>
                          <a href="#" title="">
                            Commented on Video posted{" "}
                          </a>
                        </span>
                                                            <h6>
                                                                by <a href="time-line.html">black demon.</a>
                                                            </h6>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="activity-meta">
                                                            <i>30 Days Ago</i>
                                                            <span>
                          <a href="#" title="">
                            Posted your status. “Hello guys, how are you?”
                          </a>
                        </span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="activity-meta">
                                                            <i>2 Years Ago</i>
                                                            <span>
                          <a href="#" title="">
                            Share a video on her timeline.
                          </a>
                        </span>
                                                            <h6>
                                                                "<a href="#">you are so funny mr.been.</a>"
                                                            </h6>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            {/* recent activites */}
                                            <div className="widget stick-widget">
                                                <h4 className="widget-title">Who's follownig</h4>
                                                <ul
                                                    className="followers ps-container ps-theme-default"
                                                    data-ps-id="8e5b9ac6-dfa9-fda8-085d-2e93de12558d"
                                                >
                                                    <li>
                                                        <figure>
                                                            <img src="images/resources/friend-avatar2.jpg" alt="" />
                                                        </figure>
                                                        <div className="friend-meta">
                                                            <h4>
                                                                <a href="time-line.html" title="">
                                                                    Kelly Bill
                                                                </a>
                                                            </h4>
                                                            <a href="#" title="" className="underline">
                                                                Add Friend
                                                            </a>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <figure>
                                                            <img src="images/resources/friend-avatar4.jpg" alt="" />
                                                        </figure>
                                                        <div className="friend-meta">
                                                            <h4>
                                                                <a href="time-line.html" title="">
                                                                    Issabel
                                                                </a>
                                                            </h4>
                                                            <a href="#" title="" className="underline">
                                                                Add Friend
                                                            </a>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <figure>
                                                            <img src="images/resources/friend-avatar6.jpg" alt="" />
                                                        </figure>
                                                        <div className="friend-meta">
                                                            <h4>
                                                                <a href="time-line.html" title="">
                                                                    Andrew
                                                                </a>
                                                            </h4>
                                                            <a href="#" title="" className="underline">
                                                                Add Friend
                                                            </a>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <figure>
                                                            <img src="images/resources/friend-avatar8.jpg" alt="" />
                                                        </figure>
                                                        <div className="friend-meta">
                                                            <h4>
                                                                <a href="time-line.html" title="">
                                                                    Sophia
                                                                </a>
                                                            </h4>
                                                            <a href="#" title="" className="underline">
                                                                Add Friend
                                                            </a>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <figure>
                                                            <img src="images/resources/friend-avatar3.jpg" alt="" />
                                                        </figure>
                                                        <div className="friend-meta">
                                                            <h4>
                                                                <a href="time-line.html" title="">
                                                                    Allen
                                                                </a>
                                                            </h4>
                                                            <a href="#" title="" className="underline">
                                                                Add Friend
                                                            </a>
                                                        </div>
                                                    </li>
                                                    <div
                                                        className="ps-scrollbar-x-rail"
                                                        style={{ left: 0, bottom: 0 }}
                                                    >
                                                        <div
                                                            className="ps-scrollbar-x"
                                                            tabIndex={0}
                                                            style={{ left: 0, width: 0 }}
                                                        />
                                                    </div>
                                                    <div
                                                        className="ps-scrollbar-y-rail"
                                                        style={{ top: 0, right: 0 }}
                                                    >
                                                        <div
                                                            className="ps-scrollbar-y"
                                                            tabIndex={0}
                                                            style={{ top: 0, height: 0 }}
                                                        />
                                                    </div>
                                                </ul>
                                            </div>
                                            {/* who's following */}
                                        </aside>
                                    </div>
                                    {/* sidebar */}
                                    <div className="col-lg-6">
                                        <div className="central-meta postbox">
                                            <span className="create-post">Create post</span>
                                            <div className="new-postbox">
                                                <figure>
                                                    <img src="images/resources/admin.jpg" alt="" />
                                                </figure>
                                                <div className="newpst-input">
                                                    <form method="post">
                      <textarea
                          rows={2}
                          placeholder="Share some what you are thinking?"
                          defaultValue={""}
                      />
                                                    </form>
                                                </div>
                                                <div className="attachments">
                                                    <ul>
                                                        <li>
                        <span className="add-loc">
                          <i className="fa fa-map-marker" />
                        </span>
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-music" />
                                                            <label className="fileContainer">
                                                                <input type="file" />
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-image" />
                                                            <label className="fileContainer">
                                                                <input type="file" />
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-video-camera" />
                                                            <label className="fileContainer">
                                                                <input type="file" />
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-camera" />
                                                            <label className="fileContainer">
                                                                <input type="file" />
                                                            </label>
                                                        </li>
                                                        <li className="preview-btn">
                                                            <button
                                                                className="post-btn-preview"
                                                                type="submit"
                                                                data-ripple=""
                                                            >
                                                                Preview
                                                            </button>
                                                        </li>
                                                    </ul>
                                                    <button className="post-btn" type="submit" data-ripple="">
                                                        Post
                                                    </button>
                                                </div>
                                                <div className="add-location-post">
                                                    <span>Drag map point to selected area</span>
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <label className="control-label">Lat :</label>
                                                            <input type="text" className="" id="us3-lat" />
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <label>Long :</label>
                                                            <input type="text" className="" id="us3-lon" />
                                                        </div>
                                                    </div>
                                                    {/* map */}
                                                    <div id="us3">
                                                        <div style={{ height: "100%", width: "100%" }}>
                                                            <div className="gm-err-container">
                                                                <div className="gm-err-content">
                                                                    <div className="gm-err-icon">
                                                                        <img
                                                                            src="https://maps.gstatic.com/mapfiles/api-3/images/icon_error.png"
                                                                            alt=""
                                                                            draggable="false"
                                                                            style={{ userSelect: "none" }}
                                                                        />
                                                                    </div>
                                                                    <div className="gm-err-title">
                                                                        Rất tiếc! Đã xảy ra lỗi.
                                                                    </div>
                                                                    <div className="gm-err-message">
                                                                        Trang này đã không tải Google Maps đúng cách. Hãy
                                                                        xem bảng điều khiển JavaScript để biết chi tiết kỹ
                                                                        thuật.
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* add post new box */}
                                        <div className="central-meta">
                <span className="create-post">
                  Recent Stories{" "}
                    <a href="#" title="">
                    See All
                  </a>
                </span>
                                            <div className="story-postbox">
                                                <div className="row">
                                                    <div className="col-lg-3 col-md-3 col-sm-3">
                                                        <div className="story-box">
                                                            <figure>
                                                                <img src="images/resources/story-1.jpg" alt="" />
                                                                <span>Add Your Story</span>
                                                            </figure>
                                                            <div
                                                                className="story-thumb"
                                                                data-toggle="tooltip"
                                                                title=""
                                                                data-original-title="Add Your Story"
                                                            >
                                                                <i className="fa fa-plus" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3 col-md-3 col-sm-3">
                                                        <div className="story-box">
                                                            <figure>
                                                                <img src="images/resources/story-2.jpg" alt="" />
                                                                <span>Adam James</span>
                                                            </figure>
                                                            <div
                                                                className="story-thumb"
                                                                data-toggle="tooltip"
                                                                title=""
                                                                data-original-title="Adam James"
                                                            >
                                                                <img src="images/resources/thumb-2.jpg" alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3 col-md-3 col-sm-3">
                                                        <div className="story-box">
                                                            <figure>
                                                                <img src="images/resources/story-3.jpg" alt="" />
                                                                <span>Emily grey</span>
                                                            </figure>
                                                            <div
                                                                className="story-thumb"
                                                                data-toggle="tooltip"
                                                                title=""
                                                                data-original-title="Emily grey"
                                                            >
                                                                <img src="images/resources/thumb-3.jpg" alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3 col-md-3 col-sm-3">
                                                        <div className="story-box">
                                                            <figure>
                                                                <img src="images/resources/story-4.jpg" alt="" />
                                                                <span>Jhon Deo</span>
                                                            </figure>
                                                            <div
                                                                className="story-thumb"
                                                                data-toggle="tooltip"
                                                                title=""
                                                                data-original-title="Jhon Deo"
                                                            >
                                                                <img src="images/resources/thumb-4.jpg" alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="stories-wraper">
                                                    <div className="status-story">
                      <span className="close-story">
                        <i className="ti-close" />
                      </span>
                                                        <div className="row">
                                                            <div className="col-lg-4">
                                                                <div className="stories-users">
                                                                    <h5>Stories</h5>
                                                                    <div className="my-status">
                                                                        <figure>
                                                                            <img
                                                                                src="images/resources/friend-avatar10.jpg"
                                                                                alt=""
                                                                            />
                                                                        </figure>
                                                                        <a href="#" title="" className="main-btn">
                                                                            Add New
                                                                        </a>
                                                                        <div className="story-user">
                                                                            <span>My Story</span>
                                                                            <ins>No updates</ins>
                                                                        </div>
                                                                    </div>
                                                                    <ul
                                                                        className="frnds-stories ps-container ps-theme-default ps-active-y"
                                                                        data-ps-id="6c76d8c0-4e30-8582-f791-4f2da285d35c"
                                                                    >
                                                                        <li>
                                                                            <figure>
                                                                                <img
                                                                                    src="images/resources/friend-avatar11.jpg"
                                                                                    alt=""
                                                                                />
                                                                            </figure>
                                                                            <div className="story-user">
                                                                                <span>Emily doll</span>
                                                                                <ins>yesterday</ins>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <figure>
                                                                                <img
                                                                                    src="images/resources/friend-avatar15.jpg"
                                                                                    alt=""
                                                                                />
                                                                            </figure>
                                                                            <div className="story-user">
                                                                                <span>Jhon Borny</span>
                                                                                <ins>3 days ago</ins>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <figure>
                                                                                <img
                                                                                    src="images/resources/friend-avatar12.jpg"
                                                                                    alt=""
                                                                                />
                                                                            </figure>
                                                                            <div className="story-user">
                                                                                <span>Sarah Khan</span>
                                                                                <ins>2 days ago</ins>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <figure>
                                                                                <img
                                                                                    src="images/resources/friend-avatar13.jpg"
                                                                                    alt=""
                                                                                />
                                                                            </figure>
                                                                            <div className="story-user">
                                                                                <span>Zara Hayat</span>
                                                                                <ins>1 day ago</ins>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <figure>
                                                                                <img
                                                                                    src="images/resources/friend-avatar14.jpg"
                                                                                    alt=""
                                                                                />
                                                                            </figure>
                                                                            <div className="story-user">
                                                                                <span>Zing Jang</span>
                                                                                <ins>2 days ago</ins>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <figure>
                                                                                <img
                                                                                    src="images/resources/friend-avatar16.jpg"
                                                                                    alt=""
                                                                                />
                                                                            </figure>
                                                                            <div className="story-user">
                                                                                <span>Emma watson</span>
                                                                                <ins>jan,12 2020</ins>
                                                                            </div>
                                                                        </li>
                                                                        <div
                                                                            className="ps-scrollbar-x-rail"
                                                                            style={{ left: 0, bottom: 0 }}
                                                                        >
                                                                            <div
                                                                                className="ps-scrollbar-x"
                                                                                tabIndex={0}
                                                                                style={{ left: 0, width: 0 }}
                                                                            />
                                                                        </div>
                                                                        <div
                                                                            className="ps-scrollbar-y-rail"
                                                                            style={{ top: 0, height: 419, right: 0 }}
                                                                        >
                                                                            <div
                                                                                className="ps-scrollbar-y"
                                                                                tabIndex={0}
                                                                                style={{ top: 0, height: 356 }}
                                                                            />
                                                                        </div>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-8">
                                                                <div id="btns-wrapper">
                                                                    <button className="selector-btn" id="selector0" />
                                                                    <div className="prog-bar">
                                                                        <span id="prog-bar0" style={{ width: 0 }} />
                                                                    </div>
                                                                    <button className="selector-btn" id="selector1" />
                                                                    <div className="prog-bar">
                                                                        <span id="prog-bar1" style={{ width: 0 }} />
                                                                    </div>
                                                                    <button className="selector-btn" id="selector2" />
                                                                    <div className="prog-bar">
                                                                        <span id="prog-bar2" style={{ width: 0 }} />
                                                                    </div>
                                                                    <button className="selector-btn" id="selector3" />
                                                                </div>
                                                                <div id="slideshow">
                                                                    <img
                                                                        className="slide"
                                                                        src="https://placehold.it/856x380/FF6347/FFFFFF&text=1"
                                                                        alt={11}
                                                                    />
                                                                    <img
                                                                        className="slide"
                                                                        src="https://placehold.it/856x380/6FC6F7/FFFFFF&text=2"
                                                                        alt={2}
                                                                    />
                                                                    <img
                                                                        className="slide"
                                                                        src="https://placehold.it/856x380/f3e686/FFFFFF&text=3"
                                                                        alt={3}
                                                                    />
                                                                    <img
                                                                        className="slide"
                                                                        src="https://placehold.it/856x380/71eea3/FFFFFF&text=4"
                                                                        alt={4}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* top stories */}
                                        <div className="loadMore">
                                            <div
                                                className="central-meta item"
                                                style={{ display: "inline-block" }}
                                            >
                                                <div className="user-post">
                                                    <div className="friend-info">
                                                        <figure>
                                                            <img src="images/resources/nearly1.jpg" alt="" />
                                                        </figure>
                                                        <div className="friend-name">
                                                            <div className="more">
                                                                <div className="more-post-optns">
                                                                    <i className="ti-more-alt" />
                                                                    <ul>
                                                                        <li>
                                                                            <i className="fa fa-pencil-square-o" />
                                                                            Edit Post
                                                                        </li>
                                                                        <li>
                                                                            <i className="fa fa-trash-o" />
                                                                            Delete Post
                                                                        </li>
                                                                        <li className="bad-report">
                                                                            <i className="fa fa-flag" />
                                                                            Report Post
                                                                        </li>
                                                                        <li>
                                                                            <i className="fa fa-address-card-o" />
                                                                            Boost This Post
                                                                        </li>
                                                                        <li>
                                                                            <i className="fa fa-clock-o" />
                                                                            Schedule Post
                                                                        </li>
                                                                        <li>
                                                                            <i className="fa fa-wpexplorer" />
                                                                            Select as featured
                                                                        </li>
                                                                        <li>
                                                                            <i className="fa fa-bell-slash-o" />
                                                                            Turn off Notifications
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <ins>
                                                                <a href="time-line.html" title="">
                                                                    Jack Carter
                                                                </a>{" "}
                                                                Post Album
                                                            </ins>
                                                            <span>
                          <i className="fa fa-globe" /> published: September,15
                          2020 19:PM{" "}
                        </span>
                                                        </div>
                                                        <div className="post-meta">
                                                            <p>
                                                                Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus
                                                                eget condimentum rhoncus, sem quam semper libero.
                                                            </p>
                                                            <figure>
                                                                <div className="img-bunch">
                                                                    <div className="row">
                                                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                                                            <figure>
                                                                                <a
                                                                                    href="#"
                                                                                    title=""
                                                                                    data-toggle="modal"
                                                                                    data-target="#img-comt"
                                                                                >
                                                                                    <img
                                                                                        src="images/resources/album1.jpg"
                                                                                        alt=""
                                                                                    />
                                                                                </a>
                                                                            </figure>
                                                                            <figure>
                                                                                <a
                                                                                    href="#"
                                                                                    title=""
                                                                                    data-toggle="modal"
                                                                                    data-target="#img-comt"
                                                                                >
                                                                                    <img
                                                                                        src="images/resources/album2.jpg"
                                                                                        alt=""
                                                                                    />
                                                                                </a>
                                                                            </figure>
                                                                        </div>
                                                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                                                            <figure>
                                                                                <a
                                                                                    href="#"
                                                                                    title=""
                                                                                    data-toggle="modal"
                                                                                    data-target="#img-comt"
                                                                                >
                                                                                    <img
                                                                                        src="images/resources/album6.jpg"
                                                                                        alt=""
                                                                                    />
                                                                                </a>
                                                                            </figure>
                                                                            <figure>
                                                                                <a
                                                                                    href="#"
                                                                                    title=""
                                                                                    data-toggle="modal"
                                                                                    data-target="#img-comt"
                                                                                >
                                                                                    <img
                                                                                        src="images/resources/album5.jpg"
                                                                                        alt=""
                                                                                    />
                                                                                </a>
                                                                            </figure>
                                                                            <figure>
                                                                                <a
                                                                                    href="#"
                                                                                    title=""
                                                                                    data-toggle="modal"
                                                                                    data-target="#img-comt"
                                                                                >
                                                                                    <img
                                                                                        src="images/resources/album4.jpg"
                                                                                        alt=""
                                                                                    />
                                                                                </a>
                                                                                <div className="more-photos">
                                                                                    <span>+15</span>
                                                                                </div>
                                                                            </figure>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <ul className="like-dislike">
                                                                    <li>
                                                                        <a
                                                                            className="bg-purple"
                                                                            href="#"
                                                                            title="Save to Pin Post"
                                                                        >
                                                                            <i className="fa fa-thumb-tack" />
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="bg-blue" href="#" title="Like Post">
                                                                            <i className="ti-thumb-up" />
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="bg-red"
                                                                            href="#"
                                                                            title="dislike Post"
                                                                        >
                                                                            <i className="ti-thumb-down" />
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </figure>
                                                            <div className="we-video-info">
                                                                <ul>
                                                                    <li>
                              <span className="views" title="views">
                                <i className="fa fa-eye" />
                                <ins>1.2k</ins>
                              </span>
                                                                    </li>
                                                                    <li>
                                                                        <div className="likes heart" title="Like/Dislike">
                                                                            ❤ <span>2K</span>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                              <span className="comment" title="Comments">
                                <i className="fa fa-commenting" />
                                <ins>52</ins>
                              </span>
                                                                    </li>
                                                                    <li>
                              <span>
                                <a className="share-pst" href="#" title="Share">
                                  <i className="fa fa-share-alt" />
                                </a>
                                <ins>20</ins>
                              </span>
                                                                    </li>
                                                                </ul>
                                                                <div className="users-thumb-list">
                                                                    <a
                                                                        data-toggle="tooltip"
                                                                        title=""
                                                                        href="#"
                                                                        data-original-title="Anderw"
                                                                    >
                                                                        <img
                                                                            alt=""
                                                                            src="images/resources/userlist-1.jpg"
                                                                        />
                                                                    </a>
                                                                    <a
                                                                        data-toggle="tooltip"
                                                                        title=""
                                                                        href="#"
                                                                        data-original-title="frank"
                                                                    >
                                                                        <img
                                                                            alt=""
                                                                            src="images/resources/userlist-2.jpg"
                                                                        />
                                                                    </a>
                                                                    <a
                                                                        data-toggle="tooltip"
                                                                        title=""
                                                                        href="#"
                                                                        data-original-title="Sara"
                                                                    >
                                                                        <img
                                                                            alt=""
                                                                            src="images/resources/userlist-3.jpg"
                                                                        />
                                                                    </a>
                                                                    <a
                                                                        data-toggle="tooltip"
                                                                        title=""
                                                                        href="#"
                                                                        data-original-title="Amy"
                                                                    >
                                                                        <img
                                                                            alt=""
                                                                            src="images/resources/userlist-4.jpg"
                                                                        />
                                                                    </a>
                                                                    <a
                                                                        data-toggle="tooltip"
                                                                        title=""
                                                                        href="#"
                                                                        data-original-title="Ema"
                                                                    >
                                                                        <img
                                                                            alt=""
                                                                            src="images/resources/userlist-5.jpg"
                                                                        />
                                                                    </a>
                                                                    <span>
                              <strong>You</strong>, <b>Sarah</b> and{" "}
                                                                        <a href="#" title="">
                                24+ more
                              </a>{" "}
                                                                        liked
                            </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="coment-area" style={{ display: "block" }}>
                                                            <ul className="we-comet">
                                                                <li>
                                                                    <div className="comet-avatar">
                                                                        <img src="images/resources/nearly3.jpg" alt="" />
                                                                    </div>
                                                                    <div className="we-comment">
                                                                        <h5>
                                                                            <a href="time-line.html" title="">
                                                                                Jason borne
                                                                            </a>
                                                                        </h5>
                                                                        <p>
                                                                            we are working for the dance and sing songs.
                                                                            this video is very awesome for the youngster.
                                                                            please vote this video and like our channel
                                                                        </p>
                                                                        <div className="inline-itms">
                                                                            <span>1 year ago</span>
                                                                            <a className="we-reply" href="#" title="Reply">
                                                                                <i className="fa fa-reply" />
                                                                            </a>
                                                                            <a href="#" title="">
                                                                                <i className="fa fa-heart" />
                                                                                <span>20</span>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="comet-avatar">
                                                                        <img src="images/resources/comet-4.jpg" alt="" />
                                                                    </div>
                                                                    <div className="we-comment">
                                                                        <h5>
                                                                            <a href="time-line.html" title="">
                                                                                Sophia
                                                                            </a>
                                                                        </h5>
                                                                        <p>
                                                                            we are working for the dance and sing songs.
                                                                            this video is very awesome for the youngster.
                                                                            <i className="em em-smiley" />
                                                                        </p>
                                                                        <div className="inline-itms">
                                                                            <span>1 year ago</span>
                                                                            <a className="we-reply" href="#" title="Reply">
                                                                                <i className="fa fa-reply" />
                                                                            </a>
                                                                            <a href="#" title="">
                                                                                <i className="fa fa-heart" />
                                                                                <span>20</span>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="" className="showmore underline">
                                                                        more comments+
                                                                    </a>
                                                                </li>
                                                                <li className="post-comment">
                                                                    <div className="comet-avatar">
                                                                        <img src="images/resources/nearly1.jpg" alt="" />
                                                                    </div>
                                                                    <div className="post-comt-box">
                                                                        <form method="post">
                                <textarea
                                    placeholder="Post your comment"
                                    defaultValue={""}
                                />
                                                                            <div className="add-smiles">
                                                                                <div className="uploadimage">
                                                                                    <i className="fa fa-image" />
                                                                                    <label className="fileContainer">
                                                                                        <input type="file" />
                                                                                    </label>
                                                                                </div>
                                                                                <span
                                                                                    className="em em-expressionless"
                                                                                    title="add icon"
                                                                                />
                                                                                <div className="smiles-bunch">
                                                                                    <i className="em em---1" />
                                                                                    <i className="em em-smiley" />
                                                                                    <i className="em em-anguished" />
                                                                                    <i className="em em-laughing" />
                                                                                    <i className="em em-angry" />
                                                                                    <i className="em em-astonished" />
                                                                                    <i className="em em-blush" />
                                                                                    <i className="em em-disappointed" />
                                                                                    <i className="em em-worried" />
                                                                                    <i className="em em-kissing_heart" />
                                                                                    <i className="em em-rage" />
                                                                                    <i className="em em-stuck_out_tongue" />
                                                                                </div>
                                                                            </div>
                                                                            <button type="submit" />
                                                                        </form>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* album post */}
                                            <div
                                                className="central-meta item"
                                                style={{ display: "inline-block" }}
                                            >
                                                <div className="user-post">
                                                    <div className="friend-info">
                                                        <figure>
                                                            <img src="images/resources/nearly1.jpg" alt="" />
                                                        </figure>
                                                        <div className="friend-name">
                                                            <div className="more">
                                                                <div className="more-post-optns">
                                                                    <i className="ti-more-alt" />
                                                                    <ul>
                                                                        <li>
                                                                            <i className="fa fa-pencil-square-o" />
                                                                            Edit Post
                                                                        </li>
                                                                        <li>
                                                                            <i className="fa fa-trash-o" />
                                                                            Delete Post
                                                                        </li>
                                                                        <li className="bad-report">
                                                                            <i className="fa fa-flag" />
                                                                            Report Post
                                                                        </li>
                                                                        <li>
                                                                            <i className="fa fa-address-card-o" />
                                                                            Boost This Post
                                                                        </li>
                                                                        <li>
                                                                            <i className="fa fa-clock-o" />
                                                                            Schedule Post
                                                                        </li>
                                                                        <li>
                                                                            <i className="fa fa-wpexplorer" />
                                                                            Select as featured
                                                                        </li>
                                                                        <li>
                                                                            <i className="fa fa-bell-slash-o" />
                                                                            Turn off Notifications
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <ins>
                                                                <a href="time-line.html" title="">
                                                                    Jack Carter
                                                                </a>{" "}
                                                                share{" "}
                                                                <a href="#" title="">
                                                                    link
                                                                </a>
                                                            </ins>
                                                            <span>
                          <i className="fa fa-globe" /> published: january,5
                          2010 19:PM{" "}
                        </span>
                                                        </div>
                                                        <div className="post-meta">
                                                            <figure>
                                                                <a
                                                                    href="https://www.youtube.com/watch?v=fF382gwEnG8"
                                                                    title=""
                                                                    data-strip-group="mygroup"
                                                                    className="strip vdeo-link"
                                                                    data-strip-options="width: 700,height: 450,youtube: { autoplay: 1 }"
                                                                >
                                                                    <img src="images/resources/user-post.jpg" alt="" />
                                                                    <i>
                                                                        <svg
                                                                            version="1.1"
                                                                            className="play"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                            x="0px"
                                                                            y="0px"
                                                                            height="55px"
                                                                            width="55px"
                                                                            viewBox="0 0 100 100"
                                                                            enableBackground="new 0 0 100 100"
                                                                            xmlSpace="preserve"
                                                                        >
                                                                            <path
                                                                                className="stroke-solid"
                                                                                fill="none"
                                                                                stroke=""
                                                                                d="M49.9,2.5C23.6,2.8,2.1,24.4,2.5,50.4C2.9,76.5,24.7,98,50.3,97.5c26.4-0.6,47.4-21.8,47.2-47.7
																C97.3,23.7,75.7,2.3,49.9,2.5"
                                                                            />
                                                                            <path
                                                                                className="icon"
                                                                                fill=""
                                                                                d="M38,69c-1,0.5-1.8,0-1.8-1.1V32.1c0-1.1,0.8-1.6,1.8-1.1l34,18c1,0.5,1,1.4,0,1.9L38,69z"
                                                                            />
                                                                        </svg>
                                                                    </i>
                                                                    <h2>Canada tourist spots you must visit in 2020</h2>
                                                                </a>
                                                                <ul className="like-dislike">
                                                                    <li>
                                                                        <a
                                                                            className="bg-purple"
                                                                            href="#"
                                                                            title="Save to Pin Post"
                                                                        >
                                                                            <i className="fa fa-thumb-tack" />
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="bg-blue" href="#" title="Like Post">
                                                                            <i className="ti-thumb-up" />
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="bg-red"
                                                                            href="#"
                                                                            title="dislike Post"
                                                                        >
                                                                            <i className="ti-thumb-down" />
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </figure>
                                                            <div className="description">
                                                                <p>
                                                                    Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus
                                                                    eget condimentum rhoncus, sem quam semper libero,
                                                                    sit amet adipiscing sem neque sed ipsum. Nam quam
                                                                    nunc.
                                                                </p>
                                                            </div>
                                                            <div className="we-video-info">
                                                                <ul>
                                                                    <li>
                              <span className="views" title="views">
                                <i className="fa fa-eye" />
                                <ins>1.2k</ins>
                              </span>
                                                                    </li>
                                                                    <li>
                                                                        <div className="likes heart" title="Like/Dislike">
                                                                            ❤ <span>2K</span>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                              <span className="comment" title="Comments">
                                <i className="fa fa-commenting" />
                                <ins>52</ins>
                              </span>
                                                                    </li>
                                                                    <li>
                              <span>
                                <a className="share-pst" href="#" title="Share">
                                  <i className="fa fa-share-alt" />
                                </a>
                                <ins>20</ins>
                              </span>
                                                                    </li>
                                                                </ul>
                                                                <div className="users-thumb-list">
                                                                    <a
                                                                        data-toggle="tooltip"
                                                                        title=""
                                                                        href="#"
                                                                        data-original-title="Anderw"
                                                                    >
                                                                        <img
                                                                            alt=""
                                                                            src="images/resources/userlist-1.jpg"
                                                                        />
                                                                    </a>
                                                                    <a
                                                                        data-toggle="tooltip"
                                                                        title=""
                                                                        href="#"
                                                                        data-original-title="frank"
                                                                    >
                                                                        <img
                                                                            alt=""
                                                                            src="images/resources/userlist-2.jpg"
                                                                        />
                                                                    </a>
                                                                    <a
                                                                        data-toggle="tooltip"
                                                                        title=""
                                                                        href="#"
                                                                        data-original-title="Sara"
                                                                    >
                                                                        <img
                                                                            alt=""
                                                                            src="images/resources/userlist-3.jpg"
                                                                        />
                                                                    </a>
                                                                    <a
                                                                        data-toggle="tooltip"
                                                                        title=""
                                                                        href="#"
                                                                        data-original-title="Amy"
                                                                    >
                                                                        <img
                                                                            alt=""
                                                                            src="images/resources/userlist-4.jpg"
                                                                        />
                                                                    </a>
                                                                    <a
                                                                        data-toggle="tooltip"
                                                                        title=""
                                                                        href="#"
                                                                        data-original-title="Ema"
                                                                    >
                                                                        <img
                                                                            alt=""
                                                                            src="images/resources/userlist-5.jpg"
                                                                        />
                                                                    </a>
                                                                    <span>
                              <strong>You</strong>, <b>Sarah</b> and{" "}
                                                                        <a href="#" title="">
                                24+ more
                              </a>{" "}
                                                                        liked
                            </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="coment-area" style={{}}>
                                                            <ul className="we-comet">
                                                                <li>
                                                                    <div className="comet-avatar">
                                                                        <img src="images/resources/nearly3.jpg" alt="" />
                                                                    </div>
                                                                    <div className="we-comment">
                                                                        <h5>
                                                                            <a href="time-line.html" title="">
                                                                                Jason borne
                                                                            </a>
                                                                        </h5>
                                                                        <p>
                                                                            we are working for the dance and sing songs.
                                                                            this video is very awesome for the youngster.
                                                                            please vote this video and like our channel
                                                                        </p>
                                                                        <div className="inline-itms">
                                                                            <span>1 year ago</span>
                                                                            <a className="we-reply" href="#" title="Reply">
                                                                                <i className="fa fa-reply" />
                                                                            </a>
                                                                            <a href="#" title="">
                                                                                <i className="fa fa-heart" />
                                                                                <span>20</span>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="comet-avatar">
                                                                        <img src="images/resources/comet-4.jpg" alt="" />
                                                                    </div>
                                                                    <div className="we-comment">
                                                                        <h5>
                                                                            <a href="time-line.html" title="">
                                                                                Sophia
                                                                            </a>
                                                                        </h5>
                                                                        <p>
                                                                            we are working for the dance and sing songs.
                                                                            this video is very awesome for the youngster.
                                                                            <i className="em em-smiley" />
                                                                        </p>
                                                                        <div className="inline-itms">
                                                                            <span>1 year ago</span>
                                                                            <a className="we-reply" href="#" title="Reply">
                                                                                <i className="fa fa-reply" />
                                                                            </a>
                                                                            <a href="#" title="">
                                                                                <i className="fa fa-heart" />
                                                                                <span>20</span>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="" className="showmore underline">
                                                                        more comments+
                                                                    </a>
                                                                </li>
                                                                <li className="post-comment">
                                                                    <div className="comet-avatar">
                                                                        <img src="images/resources/nearly1.jpg" alt="" />
                                                                    </div>
                                                                    <div className="post-comt-box">
                                                                        <form method="post">
                                <textarea
                                    placeholder="Post your comment"
                                    defaultValue={""}
                                />
                                                                            <div className="add-smiles">
                                                                                <div className="uploadimage">
                                                                                    <i className="fa fa-image" />
                                                                                    <label className="fileContainer">
                                                                                        <input type="file" />
                                                                                    </label>
                                                                                </div>
                                                                                <span
                                                                                    className="em em-expressionless"
                                                                                    title="add icon"
                                                                                />
                                                                                <div className="smiles-bunch">
                                                                                    <i className="em em---1" />
                                                                                    <i className="em em-smiley" />
                                                                                    <i className="em em-anguished" />
                                                                                    <i className="em em-laughing" />
                                                                                    <i className="em em-angry" />
                                                                                    <i className="em em-astonished" />
                                                                                    <i className="em em-blush" />
                                                                                    <i className="em em-disappointed" />
                                                                                    <i className="em em-worried" />
                                                                                    <i className="em em-kissing_heart" />
                                                                                    <i className="em em-rage" />
                                                                                    <i className="em em-stuck_out_tongue" />
                                                                                </div>
                                                                            </div>
                                                                            <button type="submit" />
                                                                        </form>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* video post */}
                                            <div
                                                className="central-meta item"
                                                style={{ display: "inline-block" }}
                                            >
                                                <div className="user-post">
                                                    <div className="friend-info">
                                                        <figure>
                                                            <img src="images/resources/nearly1.jpg" alt="" />
                                                        </figure>
                                                        <div className="friend-name">
                                                            <div className="more">
                                                                <div className="more-post-optns">
                                                                    <i className="ti-more-alt" />
                                                                    <ul>
                                                                        <li>
                                                                            <i className="fa fa-pencil-square-o" />
                                                                            Edit Post
                                                                        </li>
                                                                        <li>
                                                                            <i className="fa fa-trash-o" />
                                                                            Delete Post
                                                                        </li>
                                                                        <li className="bad-report">
                                                                            <i className="fa fa-flag" />
                                                                            Report Post
                                                                        </li>
                                                                        <li>
                                                                            <i className="fa fa-address-card-o" />
                                                                            Boost This Post
                                                                        </li>
                                                                        <li>
                                                                            <i className="fa fa-clock-o" />
                                                                            Schedule Post
                                                                        </li>
                                                                        <li>
                                                                            <i className="fa fa-wpexplorer" />
                                                                            Select as featured
                                                                        </li>
                                                                        <li>
                                                                            <i className="fa fa-bell-slash-o" />
                                                                            Turn off Notifications
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <ins>
                                                                <a href="time-line.html" title="">
                                                                    Digital Market
                                                                </a>
                                                            </ins>
                                                            <span>
                          sponsored <i className="fa fa-globe" />
                        </span>
                                                        </div>
                                                        <div className="post-meta">
                                                            <figure>
                                                                <img src="images/sponsors.gif" alt="" />
                                                                <ul className="like-dislike">
                                                                    <li>
                                                                        <a
                                                                            className="bg-purple"
                                                                            href="#"
                                                                            title="Save to Pin Post"
                                                                        >
                                                                            <i className="fa fa-thumb-tack" />
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="bg-blue" href="#" title="Like Post">
                                                                            <i className="ti-thumb-up" />
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="bg-red"
                                                                            href="#"
                                                                            title="dislike Post"
                                                                        >
                                                                            <i className="ti-thumb-down" />
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </figure>
                                                            <div className="description">
                                                                <a href="#" className="learnmore" data-ripple="">
                                                                    Learn More
                                                                </a>
                                                                <p>
                                                                    Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus
                                                                    eget condimentum rhoncus, sem quam semper libero,
                                                                    sit amet adipiscing sem neque sed ipsum. Nam quam
                                                                    nunc.
                                                                </p>
                                                            </div>
                                                            <div className="we-video-info">
                                                                <ul>
                                                                    <li>
                              <span className="views" title="views">
                                <i className="fa fa-eye" />
                                <ins>1.2k</ins>
                              </span>
                                                                    </li>
                                                                    <li>
                                                                        <div className="likes heart" title="Like/Dislike">
                                                                            ❤ <span>2K</span>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                              <span className="comment" title="Comments">
                                <i className="fa fa-commenting" />
                                <ins>52</ins>
                              </span>
                                                                    </li>
                                                                    <li>
                              <span>
                                <a className="share-pst" href="#" title="Share">
                                  <i className="fa fa-share-alt" />
                                </a>
                                <ins>20</ins>
                              </span>
                                                                    </li>
                                                                </ul>
                                                                <div className="users-thumb-list">
                                                                    <a
                                                                        data-toggle="tooltip"
                                                                        title=""
                                                                        href="#"
                                                                        data-original-title="Anderw"
                                                                    >
                                                                        <img
                                                                            alt=""
                                                                            src="images/resources/userlist-1.jpg"
                                                                        />
                                                                    </a>
                                                                    <a
                                                                        data-toggle="tooltip"
                                                                        title=""
                                                                        href="#"
                                                                        data-original-title="frank"
                                                                    >
                                                                        <img
                                                                            alt=""
                                                                            src="images/resources/userlist-2.jpg"
                                                                        />
                                                                    </a>
                                                                    <a
                                                                        data-toggle="tooltip"
                                                                        title=""
                                                                        href="#"
                                                                        data-original-title="Sara"
                                                                    >
                                                                        <img
                                                                            alt=""
                                                                            src="images/resources/userlist-3.jpg"
                                                                        />
                                                                    </a>
                                                                    <a
                                                                        data-toggle="tooltip"
                                                                        title=""
                                                                        href="#"
                                                                        data-original-title="Amy"
                                                                    >
                                                                        <img
                                                                            alt=""
                                                                            src="images/resources/userlist-4.jpg"
                                                                        />
                                                                    </a>
                                                                    <a
                                                                        data-toggle="tooltip"
                                                                        title=""
                                                                        href="#"
                                                                        data-original-title="Ema"
                                                                    >
                                                                        <img
                                                                            alt=""
                                                                            src="images/resources/userlist-5.jpg"
                                                                        />
                                                                    </a>
                                                                    <span>
                              <strong>You</strong>, <b>Sarah</b> and{" "}
                                                                        <a href="#" title="">
                                24+ more
                              </a>{" "}
                                                                        liked
                            </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="coment-area" style={{}}>
                                                            <ul className="we-comet">
                                                                <li>
                                                                    <div className="comet-avatar">
                                                                        <img src="images/resources/nearly3.jpg" alt="" />
                                                                    </div>
                                                                    <div className="we-comment">
                                                                        <h5>
                                                                            <a href="time-line.html" title="">
                                                                                Jason borne
                                                                            </a>
                                                                        </h5>
                                                                        <p>
                                                                            we are working for the dance and sing songs.
                                                                            this video is very awesome for the youngster.
                                                                            please vote this video and like our channel
                                                                        </p>
                                                                        <div className="inline-itms">
                                                                            <span>1 year ago</span>
                                                                            <a className="we-reply" href="#" title="Reply">
                                                                                <i className="fa fa-reply" />
                                                                            </a>
                                                                            <a href="#" title="">
                                                                                <i className="fa fa-heart" />
                                                                                <span>20</span>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="comet-avatar">
                                                                        <img src="images/resources/comet-4.jpg" alt="" />
                                                                    </div>
                                                                    <div className="we-comment">
                                                                        <h5>
                                                                            <a href="time-line.html" title="">
                                                                                Sophia
                                                                            </a>
                                                                        </h5>
                                                                        <p>
                                                                            we are working for the dance and sing songs.
                                                                            this video is very awesome for the youngster.
                                                                            <i className="em em-smiley" />
                                                                        </p>
                                                                        <div className="inline-itms">
                                                                            <span>1 year ago</span>
                                                                            <a className="we-reply" href="#" title="Reply">
                                                                                <i className="fa fa-reply" />
                                                                            </a>
                                                                            <a href="#" title="">
                                                                                <i className="fa fa-heart" />
                                                                                <span>20</span>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="" className="showmore underline">
                                                                        more comments+
                                                                    </a>
                                                                </li>
                                                                <li className="post-comment">
                                                                    <div className="comet-avatar">
                                                                        <img src="images/resources/nearly1.jpg" alt="" />
                                                                    </div>
                                                                    <div className="post-comt-box">
                                                                        <form method="post">
                                <textarea
                                    placeholder="Post your comment"
                                    defaultValue={""}
                                />
                                                                            <div className="add-smiles">
                                                                                <div className="uploadimage">
                                                                                    <i className="fa fa-image" />
                                                                                    <label className="fileContainer">
                                                                                        <input type="file" />
                                                                                    </label>
                                                                                </div>
                                                                                <span
                                                                                    className="em em-expressionless"
                                                                                    title="add icon"
                                                                                />
                                                                                <div className="smiles-bunch">
                                                                                    <i className="em em---1" />
                                                                                    <i className="em em-smiley" />
                                                                                    <i className="em em-anguished" />
                                                                                    <i className="em em-laughing" />
                                                                                    <i className="em em-angry" />
                                                                                    <i className="em em-astonished" />
                                                                                    <i className="em em-blush" />
                                                                                    <i className="em em-disappointed" />
                                                                                    <i className="em em-worried" />
                                                                                    <i className="em em-kissing_heart" />
                                                                                    <i className="em em-rage" />
                                                                                    <i className="em em-stuck_out_tongue" />
                                                                                </div>
                                                                            </div>
                                                                            <button type="submit" />
                                                                        </form>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* digital sponsors */}
                                            <div className="central-meta item" style={{ display: "none" }}>
                                                <div className="user-post">
                                                    <div className="friend-info">
                                                        <figure>
                                                            <img
                                                                alt=""
                                                                src="images/resources/friend-avatar10.jpg"
                                                            />
                                                        </figure>
                                                        <div className="friend-name">
                                                            <div className="more">
                                                                <div className="more-post-optns">
                                                                    <i className="ti-more-alt" />
                                                                    <ul>
                                                                        <li>
                                                                            <i className="fa fa-pencil-square-o" />
                                                                            Edit Post
                                                                        </li>
                                                                        <li>
                                                                            <i className="fa fa-trash-o" />
                                                                            Delete Post
                                                                        </li>
                                                                        <li className="bad-report">
                                                                            <i className="fa fa-flag" />
                                                                            Report Post
                                                                        </li>
                                                                        <li>
                                                                            <i className="fa fa-address-card-o" />
                                                                            Boost This Post
                                                                        </li>
                                                                        <li>
                                                                            <i className="fa fa-clock-o" />
                                                                            Schedule Post
                                                                        </li>
                                                                        <li>
                                                                            <i className="fa fa-wpexplorer" />
                                                                            Select as featured
                                                                        </li>
                                                                        <li>
                                                                            <i className="fa fa-bell-slash-o" />
                                                                            Turn off Notifications
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <ins>
                                                                <a title="" href="time-line.html">
                                                                    Janice Griffith
                                                                </a>
                                                            </ins>
                                                            <span>published: june,2 2010 19:PM</span>
                                                        </div>
                                                        <div className="description">
                                                            <p>
                                                                Curabitur World's most beautiful car in{" "}
                                                                <a title="" href="#">
                                                                    #test drive booking !
                                                                </a>{" "}
                                                                the most beatuiful car available in america and the
                                                                saudia arabia, you can book your test drive by our
                                                                official website
                                                            </p>
                                                        </div>
                                                        <div className="post-meta">
                                                            <div className="linked-image align-left">
                                                                <a title="" href="#">
                                                                    <img alt="" src="images/resources/page1.jpg" />
                                                                </a>
                                                            </div>
                                                            <div className="detail">
                                                                <span>Love Maid - HighChill</span>
                                                                <p>
                                                                    Lorem ipsum dolor sit amet, consectetur ipisicing
                                                                    elit, sed do eiusmod tempor incididunt ut labore et
                                                                    dolore magna aliqua...{" "}
                                                                </p>
                                                                <a title="" href="#">
                                                                    www.sample.com
                                                                </a>
                                                            </div>
                                                            <ul className="like-dislike">
                                                                <li>
                                                                    <a
                                                                        className="bg-purple"
                                                                        href="#"
                                                                        title="Save to Pin Post"
                                                                    >
                                                                        <i className="fa fa-thumb-tack" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="bg-blue" href="#" title="Like Post">
                                                                        <i className="ti-thumb-up" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="bg-red" href="#" title="dislike Post">
                                                                        <i className="ti-thumb-down" />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                            <div className="we-video-info">
                                                                <ul>
                                                                    <li>
                              <span className="views" title="views">
                                <i className="fa fa-eye" />
                                <ins>1.2k</ins>
                              </span>
                                                                    </li>
                                                                    <li>
                                                                        <div className="likes heart" title="Like/Dislike">
                                                                            ❤ <span>2K</span>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                              <span className="comment" title="Comments">
                                <i className="fa fa-commenting" />
                                <ins>52</ins>
                              </span>
                                                                    </li>
                                                                    <li>
                              <span>
                                <a className="share-pst" href="#" title="Share">
                                  <i className="fa fa-share-alt" />
                                </a>
                                <ins>20</ins>
                              </span>
                                                                    </li>
                                                                </ul>
                                                                <div className="users-thumb-list">
                                                                    <a
                                                                        data-toggle="tooltip"
                                                                        title=""
                                                                        href="#"
                                                                        data-original-title="Anderw"
                                                                    >
                                                                        <img
                                                                            alt=""
                                                                            src="images/resources/userlist-1.jpg"
                                                                        />
                                                                    </a>
                                                                    <a
                                                                        data-toggle="tooltip"
                                                                        title=""
                                                                        href="#"
                                                                        data-original-title="frank"
                                                                    >
                                                                        <img
                                                                            alt=""
                                                                            src="images/resources/userlist-2.jpg"
                                                                        />
                                                                    </a>
                                                                    <a
                                                                        data-toggle="tooltip"
                                                                        title=""
                                                                        href="#"
                                                                        data-original-title="Sara"
                                                                    >
                                                                        <img
                                                                            alt=""
                                                                            src="images/resources/userlist-3.jpg"
                                                                        />
                                                                    </a>
                                                                    <a
                                                                        data-toggle="tooltip"
                                                                        title=""
                                                                        href="#"
                                                                        data-original-title="Amy"
                                                                    >
                                                                        <img
                                                                            alt=""
                                                                            src="images/resources/userlist-4.jpg"
                                                                        />
                                                                    </a>
                                                                    <a
                                                                        data-toggle="tooltip"
                                                                        title=""
                                                                        href="#"
                                                                        data-original-title="Ema"
                                                                    >
                                                                        <img
                                                                            alt=""
                                                                            src="images/resources/userlist-5.jpg"
                                                                        />
                                                                    </a>
                                                                    <span>
                              <strong>You</strong>, <b>Sarah</b> and{" "}
                                                                        <a href="#" title="">
                                24+ more
                              </a>{" "}
                                                                        liked
                            </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="coment-area" style={{}}>
                                                            <ul className="we-comet">
                                                                <li>
                                                                    <div className="comet-avatar">
                                                                        <img src="images/resources/nearly3.jpg" alt="" />
                                                                    </div>
                                                                    <div className="we-comment">
                                                                        <h5>
                                                                            <a href="time-line.html" title="">
                                                                                Jason borne
                                                                            </a>
                                                                        </h5>
                                                                        <p>
                                                                            we are working for the dance and sing songs.
                                                                            this video is very awesome for the youngster.
                                                                            please vote this video and like our channel
                                                                        </p>
                                                                        <div className="inline-itms">
                                                                            <span>1 year ago</span>
                                                                            <a className="we-reply" href="#" title="Reply">
                                                                                <i className="fa fa-reply" />
                                                                            </a>
                                                                            <a href="#" title="">
                                                                                <i className="fa fa-heart" />
                                                                                <span>20</span>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="comet-avatar">
                                                                        <img src="images/resources/comet-4.jpg" alt="" />
                                                                    </div>
                                                                    <div className="we-comment">
                                                                        <h5>
                                                                            <a href="time-line.html" title="">
                                                                                Sophia
                                                                            </a>
                                                                        </h5>
                                                                        <p>
                                                                            we are working for the dance and sing songs.
                                                                            this video is very awesome for the youngster.
                                                                            <i className="em em-smiley" />
                                                                        </p>
                                                                        <div className="inline-itms">
                                                                            <span>1 year ago</span>
                                                                            <a className="we-reply" href="#" title="Reply">
                                                                                <i className="fa fa-reply" />
                                                                            </a>
                                                                            <a href="#" title="">
                                                                                <i className="fa fa-heart" />
                                                                                <span>20</span>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="" className="showmore underline">
                                                                        more comments+
                                                                    </a>
                                                                </li>
                                                                <li className="post-comment">
                                                                    <div className="comet-avatar">
                                                                        <img src="images/resources/nearly1.jpg" alt="" />
                                                                    </div>
                                                                    <div className="post-comt-box">
                                                                        <form method="post">
                                <textarea
                                    placeholder="Post your comment"
                                    defaultValue={""}
                                />
                                                                            <div className="add-smiles">
                                                                                <div className="uploadimage">
                                                                                    <i className="fa fa-image" />
                                                                                    <label className="fileContainer">
                                                                                        <input type="file" />
                                                                                    </label>
                                                                                </div>
                                                                                <span
                                                                                    className="em em-expressionless"
                                                                                    title="add icon"
                                                                                />
                                                                                <div className="smiles-bunch">
                                                                                    <i className="em em---1" />
                                                                                    <i className="em em-smiley" />
                                                                                    <i className="em em-anguished" />
                                                                                    <i className="em em-laughing" />
                                                                                    <i className="em em-angry" />
                                                                                    <i className="em em-astonished" />
                                                                                    <i className="em em-blush" />
                                                                                    <i className="em em-disappointed" />
                                                                                    <i className="em em-worried" />
                                                                                    <i className="em em-kissing_heart" />
                                                                                    <i className="em em-rage" />
                                                                                    <i className="em em-stuck_out_tongue" />
                                                                                </div>
                                                                            </div>
                                                                            <button type="submit" />
                                                                        </form>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* love post */}
                                            <div className="central-meta item" style={{ display: "none" }}>
                                                <div className="user-post">
                                                    <div className="friend-info">
                                                        <figure>
                                                            <img
                                                                src="images/resources/friend-avatar10.jpg"
                                                                alt=""
                                                            />
                                                        </figure>
                                                        <div className="friend-name">
                                                            <div className="more">
                                                                <div className="more-post-optns">
                                                                    <i className="ti-more-alt" />
                                                                    <ul>
                                                                        <li>
                                                                            <i className="fa fa-pencil-square-o" />
                                                                            Edit Post
                                                                        </li>
                                                                        <li>
                                                                            <i className="fa fa-trash-o" />
                                                                            Delete Post
                                                                        </li>
                                                                        <li className="bad-report">
                                                                            <i className="fa fa-flag" />
                                                                            Report Post
                                                                        </li>
                                                                        <li>
                                                                            <i className="fa fa-address-card-o" />
                                                                            Boost This Post
                                                                        </li>
                                                                        <li>
                                                                            <i className="fa fa-clock-o" />
                                                                            Schedule Post
                                                                        </li>
                                                                        <li>
                                                                            <i className="fa fa-wpexplorer" />
                                                                            Select as featured
                                                                        </li>
                                                                        <li>
                                                                            <i className="fa fa-bell-slash-o" />
                                                                            Turn off Notifications
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <ins>
                                                                <a href="time-line.html" title="">
                                                                    Mathilda Brinker
                                                                </a>
                                                            </ins>
                                                            <span>published: june,2 2020 19:PM</span>
                                                        </div>
                                                        <div className="post-meta">
                                                            <div className="description">
                                                                <p>
                                                                    World's most beautiful car in Curabitur{" "}
                                                                    <a href="#" title="">
                                                                        #test drive booking !
                                                                    </a>{" "}
                                                                    the most beatuiful car available in america and the
                                                                    saudia arabia, you can book your test drive by our
                                                                    official website
                                                                </p>
                                                            </div>
                                                            <ul className="like-dislike">
                                                                <li>
                                                                    <a href="#" title="Save to Pin Post">
                                                                        <i className="fa fa-thumb-tack" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="Like Post">
                                                                        <i className="ti-thumb-up" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="dislike Post">
                                                                        <i className="ti-thumb-down" />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                            <div className="we-video-info">
                                                                <ul>
                                                                    <li>
                              <span className="views" title="views">
                                <i className="fa fa-eye" />
                                <ins>1.2k</ins>
                              </span>
                                                                    </li>
                                                                    <li>
                                                                        <div className="likes heart" title="Like/Dislike">
                                                                            ❤ <span>2K</span>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                              <span className="comment" title="Comments">
                                <i className="fa fa-commenting" />
                                <ins>52</ins>
                              </span>
                                                                    </li>
                                                                    <li>
                              <span>
                                <a className="share-pst" href="#" title="Share">
                                  <i className="fa fa-share-alt" />
                                </a>
                                <ins>20</ins>
                              </span>
                                                                    </li>
                                                                </ul>
                                                                <div className="users-thumb-list">
                                                                    <a
                                                                        data-toggle="tooltip"
                                                                        title=""
                                                                        href="#"
                                                                        data-original-title="Anderw"
                                                                    >
                                                                        <img
                                                                            alt=""
                                                                            src="images/resources/userlist-1.jpg"
                                                                        />
                                                                    </a>
                                                                    <a
                                                                        data-toggle="tooltip"
                                                                        title=""
                                                                        href="#"
                                                                        data-original-title="frank"
                                                                    >
                                                                        <img
                                                                            alt=""
                                                                            src="images/resources/userlist-2.jpg"
                                                                        />
                                                                    </a>
                                                                    <a
                                                                        data-toggle="tooltip"
                                                                        title=""
                                                                        href="#"
                                                                        data-original-title="Sara"
                                                                    >
                                                                        <img
                                                                            alt=""
                                                                            src="images/resources/userlist-3.jpg"
                                                                        />
                                                                    </a>
                                                                    <a
                                                                        data-toggle="tooltip"
                                                                        title=""
                                                                        href="#"
                                                                        data-original-title="Amy"
                                                                    >
                                                                        <img
                                                                            alt=""
                                                                            src="images/resources/userlist-4.jpg"
                                                                        />
                                                                    </a>
                                                                    <a
                                                                        data-toggle="tooltip"
                                                                        title=""
                                                                        href="#"
                                                                        data-original-title="Ema"
                                                                    >
                                                                        <img
                                                                            alt=""
                                                                            src="images/resources/userlist-5.jpg"
                                                                        />
                                                                    </a>
                                                                    <span>
                              <strong>You</strong>, <b>Sarah</b> and{" "}
                                                                        <a href="#" title="">
                                24+ more
                              </a>{" "}
                                                                        liked
                            </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="coment-area" style={{}}>
                                                            <ul className="we-comet">
                                                                <li>
                                                                    <div className="comet-avatar">
                                                                        <img src="images/resources/nearly3.jpg" alt="" />
                                                                    </div>
                                                                    <div className="we-comment">
                                                                        <h5>
                                                                            <a href="time-line.html" title="">
                                                                                Jason borne
                                                                            </a>
                                                                        </h5>
                                                                        <p>
                                                                            we are working for the dance and sing songs.
                                                                            this video is very awesome for the youngster.
                                                                            please vote this video and like our channel
                                                                        </p>
                                                                        <div className="inline-itms">
                                                                            <span>1 year ago</span>
                                                                            <a className="we-reply" href="#" title="Reply">
                                                                                <i className="fa fa-reply" />
                                                                            </a>
                                                                            <a href="#" title="">
                                                                                <i className="fa fa-heart" />
                                                                                <span>20</span>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="comet-avatar">
                                                                        <img src="images/resources/comet-4.jpg" alt="" />
                                                                    </div>
                                                                    <div className="we-comment">
                                                                        <h5>
                                                                            <a href="time-line.html" title="">
                                                                                Sophia
                                                                            </a>
                                                                        </h5>
                                                                        <p>
                                                                            we are working for the dance and sing songs.
                                                                            this video is very awesome for the youngster.
                                                                            <i className="em em-smiley" />
                                                                        </p>
                                                                        <div className="inline-itms">
                                                                            <span>1 year ago</span>
                                                                            <a className="we-reply" href="#" title="Reply">
                                                                                <i className="fa fa-reply" />
                                                                            </a>
                                                                            <a href="#" title="">
                                                                                <i className="fa fa-heart" />
                                                                                <span>20</span>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="" className="showmore underline">
                                                                        more comments+
                                                                    </a>
                                                                </li>
                                                                <li className="post-comment">
                                                                    <div className="comet-avatar">
                                                                        <img src="images/resources/nearly1.jpg" alt="" />
                                                                    </div>
                                                                    <div className="post-comt-box">
                                                                        <form method="post">
                                <textarea
                                    placeholder="Post your comment"
                                    defaultValue={""}
                                />
                                                                            <div className="add-smiles">
                                                                                <div className="uploadimage">
                                                                                    <i className="fa fa-image" />
                                                                                    <label className="fileContainer">
                                                                                        <input type="file" />
                                                                                    </label>
                                                                                </div>
                                                                                <span
                                                                                    className="em em-expressionless"
                                                                                    title="add icon"
                                                                                />
                                                                                <div className="smiles-bunch">
                                                                                    <i className="em em---1" />
                                                                                    <i className="em em-smiley" />
                                                                                    <i className="em em-anguished" />
                                                                                    <i className="em em-laughing" />
                                                                                    <i className="em em-angry" />
                                                                                    <i className="em em-astonished" />
                                                                                    <i className="em em-blush" />
                                                                                    <i className="em em-disappointed" />
                                                                                    <i className="em em-worried" />
                                                                                    <i className="em em-kissing_heart" />
                                                                                    <i className="em em-rage" />
                                                                                    <i className="em em-stuck_out_tongue" />
                                                                                </div>
                                                                            </div>
                                                                            <button type="submit" />
                                                                        </form>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* without image */}
                                            <div className="central-meta item" style={{ display: "none" }}>
                                                <div className="user-post">
                                                    <div className="friend-info">
                                                        <figure>
                                                            <img src="images/resources/nearly6.jpg" alt="" />
                                                        </figure>
                                                        <div className="friend-name">
                                                            <div className="more">
                                                                <div className="more-post-optns">
                                                                    <i className="ti-more-alt" />
                                                                    <ul>
                                                                        <li>
                                                                            <i className="fa fa-pencil-square-o" />
                                                                            Edit Post
                                                                        </li>
                                                                        <li>
                                                                            <i className="fa fa-trash-o" />
                                                                            Delete Post
                                                                        </li>
                                                                        <li className="bad-report">
                                                                            <i className="fa fa-flag" />
                                                                            Report Post
                                                                        </li>
                                                                        <li>
                                                                            <i className="fa fa-address-card-o" />
                                                                            Boost This Post
                                                                        </li>
                                                                        <li>
                                                                            <i className="fa fa-clock-o" />
                                                                            Schedule Post
                                                                        </li>
                                                                        <li>
                                                                            <i className="fa fa-wpexplorer" />
                                                                            Select as featured
                                                                        </li>
                                                                        <li>
                                                                            <i className="fa fa-bell-slash-o" />
                                                                            Turn off Notifications
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <ins>
                                                                <a href="time-line.html" title="">
                                                                    Sophia
                                                                </a>{" "}
                                                                shared location
                                                            </ins>
                                                            <span>
                          <i className="fa fa-globe" /> published: january,5
                          2010 19:PM
                        </span>
                                                        </div>
                                                        <div className="post-meta">
                                                            <div className="post-map">
                                                                <div className="nearby-map">
                                                                    <div id="map-canvas">
                                                                        <div style={{ height: "100%", width: "100%" }} />
                                                                    </div>
                                                                </div>
                                                                <ul className="like-dislike">
                                                                    <li>
                                                                        <a
                                                                            className="bg-purple"
                                                                            href="#"
                                                                            title="Save to Pin Post"
                                                                        >
                                                                            <i className="fa fa-thumb-tack" />
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="bg-blue" href="#" title="Like Post">
                                                                            <i className="ti-thumb-up" />
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="bg-red"
                                                                            href="#"
                                                                            title="dislike Post"
                                                                        >
                                                                            <i className="ti-thumb-down" />
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            {/* near by map */}
                                                            <div className="description">
                                                                <p>
                                                                    Curabitur Lonely Cat Enjoying in Summer{" "}
                                                                    <a href="#" title="">
                                                                        #mypage
                                                                    </a>{" "}
                                                                    ullamcorper ultricies nisi. Nam eget dui. Etiam
                                                                    rhoncus. Maecenas tempus, tellus eget condimentum
                                                                    rhoncus, sem quam semper libero, sit amet adipiscing
                                                                    sem neque sed ipsum. Nam quam nunc,
                                                                </p>
                                                            </div>
                                                            <div className="we-video-info">
                                                                <ul>
                                                                    <li>
                              <span className="views" title="views">
                                <i className="fa fa-eye" />
                                <ins>1.2k</ins>
                              </span>
                                                                    </li>
                                                                    <li>
                                                                        <div className="likes heart" title="Like/Dislike">
                                                                            ❤ <span>2K</span>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                              <span className="comment" title="Comments">
                                <i className="fa fa-commenting" />
                                <ins>52</ins>
                              </span>
                                                                    </li>
                                                                    <li>
                              <span>
                                <a className="share-pst" href="#" title="Share">
                                  <i className="fa fa-share-alt" />
                                </a>
                                <ins>20</ins>
                              </span>
                                                                    </li>
                                                                </ul>
                                                                <div className="users-thumb-list">
                                                                    <a
                                                                        data-toggle="tooltip"
                                                                        title=""
                                                                        href="#"
                                                                        data-original-title="Anderw"
                                                                    >
                                                                        <img
                                                                            alt=""
                                                                            src="images/resources/userlist-1.jpg"
                                                                        />
                                                                    </a>
                                                                    <a
                                                                        data-toggle="tooltip"
                                                                        title=""
                                                                        href="#"
                                                                        data-original-title="frank"
                                                                    >
                                                                        <img
                                                                            alt=""
                                                                            src="images/resources/userlist-2.jpg"
                                                                        />
                                                                    </a>
                                                                    <a
                                                                        data-toggle="tooltip"
                                                                        title=""
                                                                        href="#"
                                                                        data-original-title="Sara"
                                                                    >
                                                                        <img
                                                                            alt=""
                                                                            src="images/resources/userlist-3.jpg"
                                                                        />
                                                                    </a>
                                                                    <a
                                                                        data-toggle="tooltip"
                                                                        title=""
                                                                        href="#"
                                                                        data-original-title="Amy"
                                                                    >
                                                                        <img
                                                                            alt=""
                                                                            src="images/resources/userlist-4.jpg"
                                                                        />
                                                                    </a>
                                                                    <a
                                                                        data-toggle="tooltip"
                                                                        title=""
                                                                        href="#"
                                                                        data-original-title="Ema"
                                                                    >
                                                                        <img
                                                                            alt=""
                                                                            src="images/resources/userlist-5.jpg"
                                                                        />
                                                                    </a>
                                                                    <span>
                              <strong>You</strong>, <b>Sarah</b> and{" "}
                                                                        <a href="#" title="">
                                24+ more
                              </a>{" "}
                                                                        liked
                            </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="coment-area" style={{}}>
                                                            <ul className="we-comet">
                                                                <li>
                                                                    <div className="comet-avatar">
                                                                        <img src="images/resources/nearly3.jpg" alt="" />
                                                                    </div>
                                                                    <div className="we-comment">
                                                                        <h5>
                                                                            <a href="time-line.html" title="">
                                                                                Jason borne
                                                                            </a>
                                                                        </h5>
                                                                        <p>
                                                                            we are working for the dance and sing songs.
                                                                            this video is very awesome for the youngster.
                                                                            please vote this video and like our channel
                                                                        </p>
                                                                        <div className="inline-itms">
                                                                            <span>1 year ago</span>
                                                                            <a className="we-reply" href="#" title="Reply">
                                                                                <i className="fa fa-reply" />
                                                                            </a>
                                                                            <a href="#" title="">
                                                                                <i className="fa fa-heart" />
                                                                                <span>20</span>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="comet-avatar">
                                                                        <img src="images/resources/comet-4.jpg" alt="" />
                                                                    </div>
                                                                    <div className="we-comment">
                                                                        <h5>
                                                                            <a href="time-line.html" title="">
                                                                                Sophia
                                                                            </a>
                                                                        </h5>
                                                                        <p>
                                                                            we are working for the dance and sing songs.
                                                                            this video is very awesome for the youngster.
                                                                            <i className="em em-smiley" />
                                                                        </p>
                                                                        <div className="inline-itms">
                                                                            <span>1 year ago</span>
                                                                            <a className="we-reply" href="#" title="Reply">
                                                                                <i className="fa fa-reply" />
                                                                            </a>
                                                                            <a href="#" title="">
                                                                                <i className="fa fa-heart" />
                                                                                <span>20</span>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="" className="showmore underline">
                                                                        more comments+
                                                                    </a>
                                                                </li>
                                                                <li className="post-comment">
                                                                    <div className="comet-avatar">
                                                                        <img src="images/resources/nearly1.jpg" alt="" />
                                                                    </div>
                                                                    <div className="post-comt-box">
                                                                        <form method="post">
                                <textarea
                                    placeholder="Post your comment"
                                    defaultValue={""}
                                />
                                                                            <div className="add-smiles">
                                                                                <div className="uploadimage">
                                                                                    <i className="fa fa-image" />
                                                                                    <label className="fileContainer">
                                                                                        <input type="file" />
                                                                                    </label>
                                                                                </div>
                                                                                <span
                                                                                    className="em em-expressionless"
                                                                                    title="add icon"
                                                                                />
                                                                                <div className="smiles-bunch">
                                                                                    <i className="em em---1" />
                                                                                    <i className="em em-smiley" />
                                                                                    <i className="em em-anguished" />
                                                                                    <i className="em em-laughing" />
                                                                                    <i className="em em-angry" />
                                                                                    <i className="em em-astonished" />
                                                                                    <i className="em em-blush" />
                                                                                    <i className="em em-disappointed" />
                                                                                    <i className="em em-worried" />
                                                                                    <i className="em em-kissing_heart" />
                                                                                    <i className="em em-rage" />
                                                                                    <i className="em em-stuck_out_tongue" />
                                                                                </div>
                                                                            </div>
                                                                            <button type="submit" />
                                                                        </form>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* map location post */}
                                            <div className="central-meta item" style={{ display: "none" }}>
                                                <div className="user-post">
                                                    <div className="friend-info">
                                                        <figure>
                                                            <img src="images/resources/nearly1.jpg" alt="" />
                                                        </figure>
                                                        <div className="friend-name">
                                                            <div className="more">
                                                                <div className="more-post-optns">
                                                                    <i className="ti-more-alt" />
                                                                    <ul>
                                                                        <li>
                                                                            <i className="fa fa-pencil-square-o" />
                                                                            Edit Post
                                                                        </li>
                                                                        <li>
                                                                            <i className="fa fa-trash-o" />
                                                                            Delete Post
                                                                        </li>
                                                                        <li className="bad-report">
                                                                            <i className="fa fa-flag" />
                                                                            Report Post
                                                                        </li>
                                                                        <li>
                                                                            <i className="fa fa-address-card-o" />
                                                                            Boost This Post
                                                                        </li>
                                                                        <li>
                                                                            <i className="fa fa-clock-o" />
                                                                            Schedule Post
                                                                        </li>
                                                                        <li>
                                                                            <i className="fa fa-wpexplorer" />
                                                                            Select as featured
                                                                        </li>
                                                                        <li>
                                                                            <i className="fa fa-bell-slash-o" />
                                                                            Turn off Notifications
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <ins>
                                                                <a href="time-line.html" title="">
                                                                    Jack Carter
                                                                </a>{" "}
                                                                share{" "}
                                                                <a href="#" title="">
                                                                    link
                                                                </a>
                                                            </ins>
                                                            <span>
                          <i className="fa fa-globe" /> published: january,5
                          2010 19:PM{" "}
                        </span>
                                                        </div>
                                                        <div className="post-meta">
                                                            <figure>
                                                                <a
                                                                    href="https://www.youtube.com/watch?v=fF382gwEnG8"
                                                                    title=""
                                                                    data-strip-group="mygroup"
                                                                    className="strip vdeo-link"
                                                                    data-strip-options="width: 700,height: 450,youtube: { autoplay: 1 }"
                                                                >
                                                                    <img src="images/resources/user-post.jpg" alt="" />
                                                                    <i>
                                                                        <svg
                                                                            version="1.1"
                                                                            className="play"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                            x="0px"
                                                                            y="0px"
                                                                            height="55px"
                                                                            width="55px"
                                                                            viewBox="0 0 100 100"
                                                                            enableBackground="new 0 0 100 100"
                                                                            xmlSpace="preserve"
                                                                        >
                                                                            <path
                                                                                className="stroke-solid"
                                                                                fill="none"
                                                                                stroke=""
                                                                                d="M49.9,2.5C23.6,2.8,2.1,24.4,2.5,50.4C2.9,76.5,24.7,98,50.3,97.5c26.4-0.6,47.4-21.8,47.2-47.7
																C97.3,23.7,75.7,2.3,49.9,2.5"
                                                                            />
                                                                            <path
                                                                                className="icon"
                                                                                fill=""
                                                                                d="M38,69c-1,0.5-1.8,0-1.8-1.1V32.1c0-1.1,0.8-1.6,1.8-1.1l34,18c1,0.5,1,1.4,0,1.9L38,69z"
                                                                            />
                                                                        </svg>
                                                                    </i>
                                                                    <h2>Canada tourist spots you must visit in 2020</h2>
                                                                </a>
                                                                <ul className="like-dislike">
                                                                    <li>
                                                                        <a
                                                                            className="bg-purple"
                                                                            href="#"
                                                                            title="Save to Pin Post"
                                                                        >
                                                                            <i className="fa fa-thumb-tack" />
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="bg-blue" href="#" title="Like Post">
                                                                            <i className="ti-thumb-up" />
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="bg-red"
                                                                            href="#"
                                                                            title="dislike Post"
                                                                        >
                                                                            <i className="ti-thumb-down" />
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </figure>
                                                            <div className="description">
                                                                <p>
                                                                    Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus
                                                                    eget condimentum rhoncus, sem quam semper libero,
                                                                    sit amet adipiscing sem neque sed ipsum. Nam quam
                                                                    nunc.
                                                                </p>
                                                            </div>
                                                            <div className="we-video-info">
                                                                <ul>
                                                                    <li>
                              <span className="views" title="views">
                                <i className="fa fa-eye" />
                                <ins>1.2k</ins>
                              </span>
                                                                    </li>
                                                                    <li>
                                                                        <div className="likes heart" title="Like/Dislike">
                                                                            ❤ <span>2K</span>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                              <span className="comment" title="Comments">
                                <i className="fa fa-commenting" />
                                <ins>52</ins>
                              </span>
                                                                    </li>
                                                                    <li>
                              <span>
                                <a className="share-pst" href="#" title="Share">
                                  <i className="fa fa-share-alt" />
                                </a>
                                <ins>20</ins>
                              </span>
                                                                    </li>
                                                                </ul>
                                                                <div className="users-thumb-list">
                                                                    <a
                                                                        data-toggle="tooltip"
                                                                        title=""
                                                                        href="#"
                                                                        data-original-title="Anderw"
                                                                    >
                                                                        <img
                                                                            alt=""
                                                                            src="images/resources/userlist-1.jpg"
                                                                        />
                                                                    </a>
                                                                    <a
                                                                        data-toggle="tooltip"
                                                                        title=""
                                                                        href="#"
                                                                        data-original-title="frank"
                                                                    >
                                                                        <img
                                                                            alt=""
                                                                            src="images/resources/userlist-2.jpg"
                                                                        />
                                                                    </a>
                                                                    <a
                                                                        data-toggle="tooltip"
                                                                        title=""
                                                                        href="#"
                                                                        data-original-title="Sara"
                                                                    >
                                                                        <img
                                                                            alt=""
                                                                            src="images/resources/userlist-3.jpg"
                                                                        />
                                                                    </a>
                                                                    <a
                                                                        data-toggle="tooltip"
                                                                        title=""
                                                                        href="#"
                                                                        data-original-title="Amy"
                                                                    >
                                                                        <img
                                                                            alt=""
                                                                            src="images/resources/userlist-4.jpg"
                                                                        />
                                                                    </a>
                                                                    <a
                                                                        data-toggle="tooltip"
                                                                        title=""
                                                                        href="#"
                                                                        data-original-title="Ema"
                                                                    >
                                                                        <img
                                                                            alt=""
                                                                            src="images/resources/userlist-5.jpg"
                                                                        />
                                                                    </a>
                                                                    <span>
                              <strong>You</strong>, <b>Sarah</b> and{" "}
                                                                        <a href="#" title="">
                                24+ more
                              </a>{" "}
                                                                        liked
                            </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="coment-area" style={{}}>
                                                            <ul className="we-comet">
                                                                <li>
                                                                    <div className="comet-avatar">
                                                                        <img src="images/resources/nearly3.jpg" alt="" />
                                                                    </div>
                                                                    <div className="we-comment">
                                                                        <h5>
                                                                            <a href="time-line.html" title="">
                                                                                Jason borne
                                                                            </a>
                                                                        </h5>
                                                                        <p>
                                                                            we are working for the dance and sing songs.
                                                                            this video is very awesome for the youngster.
                                                                            please vote this video and like our channel
                                                                        </p>
                                                                        <div className="inline-itms">
                                                                            <span>1 year ago</span>
                                                                            <a className="we-reply" href="#" title="Reply">
                                                                                <i className="fa fa-reply" />
                                                                            </a>
                                                                            <a href="#" title="">
                                                                                <i className="fa fa-heart" />
                                                                                <span>20</span>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="comet-avatar">
                                                                        <img src="images/resources/comet-4.jpg" alt="" />
                                                                    </div>
                                                                    <div className="we-comment">
                                                                        <h5>
                                                                            <a href="time-line.html" title="">
                                                                                Sophia
                                                                            </a>
                                                                        </h5>
                                                                        <p>
                                                                            we are working for the dance and sing songs.
                                                                            this video is very awesome for the youngster.
                                                                            <i className="em em-smiley" />
                                                                        </p>
                                                                        <div className="inline-itms">
                                                                            <span>1 year ago</span>
                                                                            <a className="we-reply" href="#" title="Reply">
                                                                                <i className="fa fa-reply" />
                                                                            </a>
                                                                            <a href="#" title="">
                                                                                <i className="fa fa-heart" />
                                                                                <span>20</span>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="" className="showmore underline">
                                                                        more comments+
                                                                    </a>
                                                                </li>
                                                                <li className="post-comment">
                                                                    <div className="comet-avatar">
                                                                        <img src="images/resources/nearly1.jpg" alt="" />
                                                                    </div>
                                                                    <div className="post-comt-box">
                                                                        <form method="post">
                                <textarea
                                    placeholder="Post your comment"
                                    defaultValue={""}
                                />
                                                                            <div className="add-smiles">
                                                                                <div className="uploadimage">
                                                                                    <i className="fa fa-image" />
                                                                                    <label className="fileContainer">
                                                                                        <input type="file" />
                                                                                    </label>
                                                                                </div>
                                                                                <span
                                                                                    className="em em-expressionless"
                                                                                    title="add icon"
                                                                                />
                                                                                <div className="smiles-bunch">
                                                                                    <i className="em em---1" />
                                                                                    <i className="em em-smiley" />
                                                                                    <i className="em em-anguished" />
                                                                                    <i className="em em-laughing" />
                                                                                    <i className="em em-angry" />
                                                                                    <i className="em em-astonished" />
                                                                                    <i className="em em-blush" />
                                                                                    <i className="em em-disappointed" />
                                                                                    <i className="em em-worried" />
                                                                                    <i className="em em-kissing_heart" />
                                                                                    <i className="em em-rage" />
                                                                                    <i className="em em-stuck_out_tongue" />
                                                                                </div>
                                                                            </div>
                                                                            <button type="submit" />
                                                                        </form>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* video post */}
                                        </div>
                                        <button className="btn-view btn-load-more">Load More</button>
                                    </div>
                                    {/* centerl meta */}
                                    <div className="col-lg-3">
                                        <aside className="sidebar static right">
                                            <div className="widget">
                                                <h4 className="widget-title">Your page</h4>
                                                <div className="your-page">
                                                    <figure>
                                                        <a href="#" title="">
                                                            <img src="images/resources/friend-avatar9.jpg" alt="" />
                                                        </a>
                                                    </figure>
                                                    <div className="page-meta">
                                                        <a href="#" title="" className="underline">
                                                            My Creative Page
                                                        </a>
                                                        <span>
                        <i className="ti-comment" />
                        <a href="insight.html" title="">
                          Messages <em>9</em>
                        </a>
                      </span>
                                                        <span>
                        <i className="ti-bell" />
                        <a href="insight.html" title="">
                          Notifications <em>2</em>
                        </a>
                      </span>
                                                    </div>
                                                    <ul className="page-publishes">
                                                        <li>
                        <span>
                          <i className="ti-pencil-alt" />
                          Publish
                        </span>
                                                        </li>
                                                        <li>
                        <span>
                          <i className="ti-camera" />
                          Photo
                        </span>
                                                        </li>
                                                        <li>
                        <span>
                          <i className="ti-video-camera" />
                          Live
                        </span>
                                                        </li>
                                                        <li>
                        <span>
                          <i className="fa fa-user-plus" />
                          Invite
                        </span>
                                                        </li>
                                                    </ul>
                                                    <div className="page-likes">
                                                        <ul className="nav nav-tabs likes-btn">
                                                            <li className="nav-item">
                                                                <a
                                                                    className="active"
                                                                    href="#link1"
                                                                    data-toggle="tab"
                                                                    data-ripple=""
                                                                >
                                                                    likes
                                                                </a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a
                                                                    className=""
                                                                    href="#link2"
                                                                    data-toggle="tab"
                                                                    data-ripple=""
                                                                >
                                                                    views
                                                                </a>
                                                            </li>
                                                        </ul>
                                                        {/* Tab panes */}
                                                        <div className="tab-content">
                                                            <div className="tab-pane active fade show" id="link1">
                          <span>
                            <i className="ti-heart" />
                            884
                          </span>
                                                                <a href="#" title="weekly-likes">
                                                                    35 new likes this week
                                                                </a>
                                                                <div className="users-thumb-list">
                                                                    <a
                                                                        href="#"
                                                                        title=""
                                                                        data-toggle="tooltip"
                                                                        data-original-title="Anderw"
                                                                    >
                                                                        <img
                                                                            src="images/resources/userlist-1.jpg"
                                                                            alt=""
                                                                        />
                                                                    </a>
                                                                    <a
                                                                        href="#"
                                                                        title=""
                                                                        data-toggle="tooltip"
                                                                        data-original-title="frank"
                                                                    >
                                                                        <img
                                                                            src="images/resources/userlist-2.jpg"
                                                                            alt=""
                                                                        />
                                                                    </a>
                                                                    <a
                                                                        href="#"
                                                                        title=""
                                                                        data-toggle="tooltip"
                                                                        data-original-title="Sara"
                                                                    >
                                                                        <img
                                                                            src="images/resources/userlist-3.jpg"
                                                                            alt=""
                                                                        />
                                                                    </a>
                                                                    <a
                                                                        href="#"
                                                                        title=""
                                                                        data-toggle="tooltip"
                                                                        data-original-title="Amy"
                                                                    >
                                                                        <img
                                                                            src="images/resources/userlist-4.jpg"
                                                                            alt=""
                                                                        />
                                                                    </a>
                                                                    <a
                                                                        href="#"
                                                                        title=""
                                                                        data-toggle="tooltip"
                                                                        data-original-title="Ema"
                                                                    >
                                                                        <img
                                                                            src="images/resources/userlist-5.jpg"
                                                                            alt=""
                                                                        />
                                                                    </a>
                                                                    <a
                                                                        href="#"
                                                                        title=""
                                                                        data-toggle="tooltip"
                                                                        data-original-title="Sophie"
                                                                    >
                                                                        <img
                                                                            src="images/resources/userlist-6.jpg"
                                                                            alt=""
                                                                        />
                                                                    </a>
                                                                    <a
                                                                        href="#"
                                                                        title=""
                                                                        data-toggle="tooltip"
                                                                        data-original-title="Maria"
                                                                    >
                                                                        <img
                                                                            src="images/resources/userlist-7.jpg"
                                                                            alt=""
                                                                        />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="tab-pane fade" id="link2">
                          <span>
                            <i className="fa fa-eye" />
                            440
                          </span>
                                                                <a href="#" title="weekly-likes">
                                                                    440 new views this week
                                                                </a>
                                                                <div className="users-thumb-list">
                                                                    <a
                                                                        href="#"
                                                                        title=""
                                                                        data-toggle="tooltip"
                                                                        data-original-title="Anderw"
                                                                    >
                                                                        <img
                                                                            src="images/resources/userlist-1.jpg"
                                                                            alt=""
                                                                        />
                                                                    </a>
                                                                    <a
                                                                        href="#"
                                                                        title=""
                                                                        data-toggle="tooltip"
                                                                        data-original-title="frank"
                                                                    >
                                                                        <img
                                                                            src="images/resources/userlist-2.jpg"
                                                                            alt=""
                                                                        />
                                                                    </a>
                                                                    <a
                                                                        href="#"
                                                                        title=""
                                                                        data-toggle="tooltip"
                                                                        data-original-title="Sara"
                                                                    >
                                                                        <img
                                                                            src="images/resources/userlist-3.jpg"
                                                                            alt=""
                                                                        />
                                                                    </a>
                                                                    <a
                                                                        href="#"
                                                                        title=""
                                                                        data-toggle="tooltip"
                                                                        data-original-title="Amy"
                                                                    >
                                                                        <img
                                                                            src="images/resources/userlist-4.jpg"
                                                                            alt=""
                                                                        />
                                                                    </a>
                                                                    <a
                                                                        href="#"
                                                                        title=""
                                                                        data-toggle="tooltip"
                                                                        data-original-title="Ema"
                                                                    >
                                                                        <img
                                                                            src="images/resources/userlist-5.jpg"
                                                                            alt=""
                                                                        />
                                                                    </a>
                                                                    <a
                                                                        href="#"
                                                                        title=""
                                                                        data-toggle="tooltip"
                                                                        data-original-title="Sophie"
                                                                    >
                                                                        <img
                                                                            src="images/resources/userlist-6.jpg"
                                                                            alt=""
                                                                        />
                                                                    </a>
                                                                    <a
                                                                        href="#"
                                                                        title=""
                                                                        data-toggle="tooltip"
                                                                        data-original-title="Maria"
                                                                    >
                                                                        <img
                                                                            src="images/resources/userlist-7.jpg"
                                                                            alt=""
                                                                        />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* page like widget */}
                                            <div className="widget">
                                                <h4 className="widget-title">
                                                    Explor Events{" "}
                                                    <a title="" href="#" className="see-all">
                                                        See All
                                                    </a>
                                                </h4>
                                                <div className="rec-events bg-purple">
                                                    <i className="ti-gift" />
                                                    <h6>
                                                        <a href="#" title="">
                                                            Ocean Motel good night event in columbia
                                                        </a>
                                                    </h6>
                                                    <img src="images/clock.png" alt="" />
                                                </div>
                                                <div className="rec-events bg-blue">
                                                    <i className="ti-microphone" />
                                                    <h6>
                                                        <a href="#" title="">
                                                            2016 The 3rd International Conference
                                                        </a>
                                                    </h6>
                                                    <img src="images/clock.png" alt="" />
                                                </div>
                                            </div>
                                            {/* explore events */}
                                            <div className="widget">
                                                <h4 className="widget-title">Profile intro</h4>
                                                <ul className="short-profile">
                                                    <li>
                                                        <span>about</span>
                                                        <p>
                                                            Hi, i am jhon kates, i am 32 years old and worked as a
                                                            web developer in microsoft{" "}
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <span>fav tv show</span>
                                                        <p>Sacred Games, Spartcus Blood, Games of Theron </p>
                                                    </li>
                                                    <li>
                                                        <span>favourit music</span>
                                                        <p>Justin Biber, Shakira, Nati Natasah</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            {/* profile intro widget */}
                                            <div className="widget stick-widget">
                                                <h4 className="widget-title">
                                                    Recent Links{" "}
                                                    <a title="" href="#" className="see-all">
                                                        See All
                                                    </a>
                                                </h4>
                                                <ul className="recent-links">
                                                    <li>
                                                        <figure>
                                                            <img src="images/resources/recentlink-1.jpg" alt="" />
                                                        </figure>
                                                        <div className="re-links-meta">
                                                            <h6>
                                                                <a href="#" title="">
                                                                    moira's fade reaches much farther than you think.
                                                                </a>
                                                            </h6>
                                                            <span>2 weeks ago </span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <figure>
                                                            <img src="images/resources/recentlink-2.jpg" alt="" />
                                                        </figure>
                                                        <div className="re-links-meta">
                                                            <h6>
                                                                <a href="#" title="">
                                                                    daniel asks if we want him to do the voice of
                                                                    doomfist
                                                                </a>
                                                            </h6>
                                                            <span>3 months ago </span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <figure>
                                                            <img src="images/resources/recentlink-3.jpg" alt="" />
                                                        </figure>
                                                        <div className="re-links-meta">
                                                            <h6>
                                                                <a href="#" title="">
                                                                    the pitnik overwatch scandals.
                                                                </a>
                                                            </h6>
                                                            <span>1 day before</span>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            {/* recent links */}
                                        </aside>
                                    </div>
                                    {/* sidebar */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
export default Home;
;