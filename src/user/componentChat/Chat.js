const Chat = () =>{
    return(
        <>
            <section>
                <div className="gap2 no-gap gray-bg">
                    <div className="container-fluid no-padding">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="message-users">
                                    <div className="message-head">
                                        <h4>Chat Messages</h4>
                                        <div className="more">
                                            <div className="more-post-optns">
                                                <i className="ti-settings" />
                                                <ul>
                                                    <li>
                                                        <i className="fa fa-wrench" />
                                                        Setting
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-envelope-open" />
                                                        Active Contacts
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-folder-open" />
                                                        Archives Chats
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-eye-slash" />
                                                        Unread Chats
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-flag" />
                                                        Report a problem
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="message-people-srch">
                                        <form method="post">
                                            <input type="text" placeholder="Search Friend.." />
                                            <button type="submit">
                                                <i className="fa fa-search" />
                                            </button>
                                        </form>
                                        <div className="btn-group add-group" role="group">
                                            <button
                                                id="btnGroupDrop2"
                                                type="button"
                                                className="btn group dropdown-toggle user-filter"
                                                data-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                                All
                                            </button>
                                            <div className="dropdown-menu" aria-labelledby="btnGroupDrop2">
                                                <a className="dropdown-item" href="#">
                                                    Online
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    Away
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    unread
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    archive
                                                </a>
                                            </div>
                                        </div>
                                        <div className="btn-group add-group align-right" role="group">
                                            <button
                                                id="btnGroupDrop1"
                                                type="button"
                                                className="btn group dropdown-toggle"
                                                data-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                                Create+
                                            </button>
                                            <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                                <a className="dropdown-item" href="#">
                                                    New user
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    New Group +
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    Private Chat +
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mesg-peple">
                                        <ul
                                            className="nav nav-tabs nav-tabs--vertical msg-pepl-list ps-container ps-theme-default ps-active-y"
                                            data-ps-id="72cac23f-aed9-36a9-300e-9742efe2e66b"
                                        >
                                            <li className="nav-item unread">
                                                <a className="active" href="#link1" data-toggle="tab">
                                                    <figure>
                                                        <img src="images/resources/friend-avatar3.jpg" alt="" />
                                                        <span className="status f-online" />
                                                    </figure>
                                                    <div className="user-name">
                                                        <h6 className="">Andrew</h6>
                                                        <span>you send a video - 2hrs ago</span>
                                                    </div>
                                                    <div className="more">
                                                        <div className="more-post-optns">
                                                            <i className="ti-more-alt" />
                                                            <ul>
                                                                <li>
                                                                    <i className="fa fa-bell-slash-o" />
                                                                    Mute
                                                                </li>
                                                                <li>
                                                                    <i className="ti-trash" />
                                                                    Delete
                                                                </li>
                                                                <li>
                                                                    <i className="fa fa-folder-open-o" />
                                                                    Archive
                                                                </li>
                                                                <li>
                                                                    <i className="fa fa-ban" />
                                                                    Block
                                                                </li>
                                                                <li>
                                                                    <i className="fa fa-eye-slash" />
                                                                    Ignore Message
                                                                </li>
                                                                <li>
                                                                    <i className="fa fa-envelope" />
                                                                    Mark Unread
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="nav-item ">
                                                <a className="" href="#link2" data-toggle="tab">
                                                    <figure>
                                                        <img src="images/resources/admin.jpg" alt="" />
                                                        <span className="status f-away" />
                                                    </figure>
                                                    <div className="user-name">
                                                        <h6 className="unread">Jack Carter</h6>
                                                        <span>you send a audio - Tue</span>
                                                    </div>
                                                    <div className="more">
                                                        <div className="more-post-optns">
                                                            <i className="ti-more-alt" />
                                                            <ul>
                                                                <li>
                                                                    <i className="fa fa-bell-slash-o" />
                                                                    Mute
                                                                </li>
                                                                <li>
                                                                    <i className="ti-trash" />
                                                                    Delete
                                                                </li>
                                                                <li>
                                                                    <i className="fa fa-folder-open-o" />
                                                                    Archive
                                                                </li>
                                                                <li>
                                                                    <i className="fa fa-ban" />
                                                                    Block
                                                                </li>
                                                                <li>
                                                                    <i className="fa fa-eye-slash" />
                                                                    Ignore Message
                                                                </li>
                                                                <li>
                                                                    <i className="fa fa-envelope" />
                                                                    Mark Unread
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="nav-item ">
                                                <a className="" href="#link3" data-toggle="tab">
                                                    <figure>
                                                        <img src="images/resources/friend-avatar4.jpg" alt="" />
                                                        <span className="status f-online" />
                                                    </figure>
                                                    <div className="user-name">
                                                        <h6 className="unread">Julie Robert</h6>
                                                        <span>hi, i am julie - wed</span>
                                                    </div>
                                                    <div className="more">
                                                        <div className="more-post-optns">
                                                            <i className="ti-more-alt" />
                                                            <ul>
                                                                <li>
                                                                    <i className="fa fa-bell-slash-o" />
                                                                    Mute
                                                                </li>
                                                                <li>
                                                                    <i className="ti-trash" />
                                                                    Delete
                                                                </li>
                                                                <li>
                                                                    <i className="fa fa-folder-open-o" />
                                                                    Archive
                                                                </li>
                                                                <li>
                                                                    <i className="fa fa-ban" />
                                                                    Block
                                                                </li>
                                                                <li>
                                                                    <i className="fa fa-eye-slash" />
                                                                    Ignore Message
                                                                </li>
                                                                <li>
                                                                    <i className="fa fa-envelope" />
                                                                    Mark Unread
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="nav-item ">
                                                <a className="" href="#link4" data-toggle="tab">
                                                    <figure>
                                                        <img src="images/resources/friend-avatar5.jpg" alt="" />
                                                        <span className="status f-offline" />
                                                    </figure>
                                                    <div className="user-name">
                                                        <h6 className="unread">Jhon Doe</h6>
                                                        <span>May i come to.. - Thr</span>
                                                    </div>
                                                    <div className="more">
                                                        <div className="more-post-optns">
                                                            <i className="ti-more-alt" />
                                                            <ul>
                                                                <li>
                                                                    <i className="fa fa-bell-slash-o" />
                                                                    Mute
                                                                </li>
                                                                <li>
                                                                    <i className="ti-trash" />
                                                                    Delete
                                                                </li>
                                                                <li>
                                                                    <i className="fa fa-folder-open-o" />
                                                                    Archive
                                                                </li>
                                                                <li>
                                                                    <i className="fa fa-ban" />
                                                                    Block
                                                                </li>
                                                                <li>
                                                                    <i className="fa fa-eye-slash" />
                                                                    Ignore Message
                                                                </li>
                                                                <li>
                                                                    <i className="fa fa-envelope" />
                                                                    Mark Unread
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="nav-item unread ">
                                                <a className="" href="#link5" data-toggle="tab">
                                                    <figure>
                                                        <img src="images/resources/friend-avatar6.jpg" alt="" />
                                                        <span className="status f-online" />
                                                    </figure>
                                                    <div className="user-name">
                                                        <h6 className="unread">Single Men</h6>
                                                        <span>hello? - a days ago</span>
                                                    </div>
                                                    <div className="more">
                                                        <div className="more-post-optns">
                                                            <i className="ti-more-alt" />
                                                            <ul>
                                                                <li>
                                                                    <i className="fa fa-bell-slash-o" />
                                                                    Mute
                                                                </li>
                                                                <li>
                                                                    <i className="ti-trash" />
                                                                    Delete
                                                                </li>
                                                                <li>
                                                                    <i className="fa fa-folder-open-o" />
                                                                    Archive
                                                                </li>
                                                                <li>
                                                                    <i className="fa fa-ban" />
                                                                    Block
                                                                </li>
                                                                <li>
                                                                    <i className="fa fa-eye-slash" />
                                                                    Ignore Message
                                                                </li>
                                                                <li>
                                                                    <i className="fa fa-envelope" />
                                                                    Mark Unread
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="nav-item ">
                                                <a className="" href="#link6" data-toggle="tab">
                                                    <figure>
                                                        <img src="images/resources/friend-avatar7.jpg" alt="" />
                                                        <span className="status f-offline" />
                                                    </figure>
                                                    <div className="user-name">
                                                        <h6 className="unread">Sarah Jane</h6>
                                                        <span>she send a video - a days ago</span>
                                                    </div>
                                                    <div className="more">
                                                        <div className="more-post-optns">
                                                            <i className="ti-more-alt" />
                                                            <ul>
                                                                <li>
                                                                    <i className="fa fa-bell-slash-o" />
                                                                    Mute
                                                                </li>
                                                                <li>
                                                                    <i className="ti-trash" />
                                                                    Delete
                                                                </li>
                                                                <li>
                                                                    <i className="fa fa-folder-open-o" />
                                                                    Archive
                                                                </li>
                                                                <li>
                                                                    <i className="fa fa-ban" />
                                                                    Block
                                                                </li>
                                                                <li>
                                                                    <i className="fa fa-eye-slash" />
                                                                    Ignore Message
                                                                </li>
                                                                <li>
                                                                    <i className="fa fa-envelope" />
                                                                    Mark Unread
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="nav-item ">
                                                <a className="" href="#link7" data-toggle="tab">
                                                    <figure>
                                                        <img src="images/resources/friend-avatar8.jpg" alt="" />
                                                        <span className="status f-online" />
                                                    </figure>
                                                    <div className="user-name">
                                                        <h6 className="">Julie Robert</h6>
                                                        <span>She send a file - 22 jan</span>
                                                    </div>
                                                    <div className="more">
                                                        <div className="more-post-optns">
                                                            <i className="ti-more-alt" />
                                                            <ul>
                                                                <li>
                                                                    <i className="fa fa-bell-slash-o" />
                                                                    Mute
                                                                </li>
                                                                <li>
                                                                    <i className="ti-trash" />
                                                                    Delete
                                                                </li>
                                                                <li>
                                                                    <i className="fa fa-folder-open-o" />
                                                                    Archive
                                                                </li>
                                                                <li>
                                                                    <i className="fa fa-ban" />
                                                                    Block
                                                                </li>
                                                                <li>
                                                                    <i className="fa fa-eye-slash" />
                                                                    Ignore Message
                                                                </li>
                                                                <li>
                                                                    <i className="fa fa-envelope" />
                                                                    Mark Unread
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="nav-item unread ">
                                                <a className="" href="#link8" data-toggle="tab">
                                                    <figure>
                                                        <img src="images/resources/friend-avatar6.jpg" alt="" />
                                                        <span className="status f-away" />
                                                    </figure>
                                                    <div className="user-name">
                                                        <h6 className="unread">Frank Will</h6>
                                                        <span>You there ? - a days ago</span>
                                                    </div>
                                                    <div className="more">
                                                        <div className="more-post-optns">
                                                            <i className="ti-more-alt" />
                                                            <ul>
                                                                <li>
                                                                    <i className="fa fa-bell-slash-o" />
                                                                    Mute
                                                                </li>
                                                                <li>
                                                                    <i className="ti-trash" />
                                                                    Delete
                                                                </li>
                                                                <li>
                                                                    <i className="fa fa-folder-open-o" />
                                                                    Archive
                                                                </li>
                                                                <li>
                                                                    <i className="fa fa-ban" />
                                                                    Block
                                                                </li>
                                                                <li>
                                                                    <i className="fa fa-eye-slash" />
                                                                    Ignore Message
                                                                </li>
                                                                <li>
                                                                    <i className="fa fa-envelope" />
                                                                    Mark Unread
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="nav-item ">
                                                <a className="" href="#link9" data-toggle="tab">
                                                    <figure>
                                                        <img src="images/resources/friend-avatar9.jpg" alt="" />
                                                        <span className="status f-online" />
                                                    </figure>
                                                    <div className="user-name">
                                                        <h6 className="unread">Niclos Cage</h6>
                                                        <span>you send a video - wed</span>
                                                    </div>
                                                    <div className="more">
                                                        <div className="more-post-optns">
                                                            <i className="ti-more-alt" />
                                                            <ul>
                                                                <li>
                                                                    <i className="fa fa-bell-slash-o" />
                                                                    Mute
                                                                </li>
                                                                <li>
                                                                    <i className="ti-trash" />
                                                                    Delete
                                                                </li>
                                                                <li>
                                                                    <i className="fa fa-folder-open-o" />
                                                                    Archive
                                                                </li>
                                                                <li>
                                                                    <i className="fa fa-ban" />
                                                                    Block
                                                                </li>
                                                                <li>
                                                                    <i className="fa fa-eye-slash" />
                                                                    Ignore Message
                                                                </li>
                                                                <li>
                                                                    <i className="fa fa-envelope" />
                                                                    Mark Unread
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="nav-item ">
                                                <a className="" href="#link10" data-toggle="tab">
                                                    <figure>
                                                        <img src="images/resources/friend-avatar8.jpg" alt="" />
                                                        <span className="status f-offline" />
                                                    </figure>
                                                    <div className="user-name">
                                                        <h6 className="">kelly Quin</h6>
                                                        <span>Hi dude.. - 23 feb</span>
                                                    </div>
                                                    <div className="more">
                                                        <div className="more-post-optns">
                                                            <i className="ti-more-alt" />
                                                            <ul>
                                                                <li>
                                                                    <i className="fa fa-bell-slash-o" />
                                                                    Mute
                                                                </li>
                                                                <li>
                                                                    <i className="ti-trash" />
                                                                    Delete
                                                                </li>
                                                                <li>
                                                                    <i className="fa fa-folder-open-o" />
                                                                    Archive
                                                                </li>
                                                                <li>
                                                                    <i className="fa fa-ban" />
                                                                    Block
                                                                </li>
                                                                <li>
                                                                    <i className="fa fa-eye-slash" />
                                                                    Ignore Message
                                                                </li>
                                                                <li>
                                                                    <i className="fa fa-envelope" />
                                                                    Mark Unread
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </a>
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
                                                style={{ top: 0, height: 505, right: 0 }}
                                            >
                                                <div
                                                    className="ps-scrollbar-y"
                                                    tabIndex={0}
                                                    style={{ top: 0, height: 392 }}
                                                />
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                                <div className="tab-content messenger">
                                    <div className="tab-pane active fade show" id="link1">
                                        <div className="row merged">
                                            <div className="col-lg-12">
                                                <div className="mesg-area-head">
                                                    <div className="active-user">
                                                        <figure>
                                                            <img src="images/resources/friend-avatar3.jpg" alt="" />
                                                            <span className="status f-online" />
                                                        </figure>
                                                        <div>
                                                            <h6 className="unread">Andrew</h6>
                                                            <span>Online</span>
                                                        </div>
                                                    </div>
                                                    <ul className="live-calls">
                                                        <li className="audio-call">
                                                            <span className="fa fa-phone" />
                                                        </li>
                                                        <li className="video-call">
                                                            <span className="fa fa-video" />
                                                        </li>
                                                        <li className="uzr-info">
                                                            <span className="fa fa-info-circle" />
                                                        </li>
                                                        <li>
                                                            <div className="dropdown">
                                                                <button
                                                                    className="btn"
                                                                    data-toggle="dropdown"
                                                                    aria-haspopup="true"
                                                                    aria-expanded="false"
                                                                >
                                                                    <i className="ti-view-grid" />
                                                                </button>
                                                                <div className="dropdown-menu dropdown-menu-right">
                                                                    <a className="dropdown-item audio-call" href="#">
                                                                        <i className="ti-headphone-alt" />
                                                                        Voice Call
                                                                    </a>
                                                                    <a href="#" className="dropdown-item video-call">
                                                                        <i className="ti-video-camera" />
                                                                        Video Call
                                                                    </a>
                                                                    <hr />
                                                                    <a href="#" className="dropdown-item">
                                                                        <i className="ti-server" />
                                                                        Clear History
                                                                    </a>
                                                                    <a href="#" className="dropdown-item">
                                                                        <i className="ti-hand-stop" />
                                                                        Block Contact
                                                                    </a>
                                                                    <a href="#" className="dropdown-item">
                                                                        <i className="ti-trash" />
                                                                        Delete Contact
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-8 col-md-8">
                                                <div className="mesge-area">
                                                    <ul
                                                        className="conversations ps-container ps-theme-default ps-active-y"
                                                        data-ps-id="2610aa5c-5522-a2b2-1da3-d0bf9c5f3192"
                                                    >
                                                        <li>
                                                            <figure>
                                                                <img src="images/resources/user1.jpg" alt="" />
                                                            </figure>
                                                            <div className="text-box">
                                                                <p>
                                                                    HI, i have faced a problem with your software. are
                                                                    you available now
                                                                </p>
                                                                <span>
                            <i className="ti-check" />
                            <i className="ti-check" /> 2:32PM
                          </span>
                                                            </div>
                                                        </li>
                                                        <li className="me">
                                                            <figure>
                                                                <img src="images/resources/user2.jpg" alt="" />
                                                            </figure>
                                                            <div className="text-box">
                                                                <p>
                                                                    HI, i have checked about your query, there is no any
                                                                    problem like that...
                                                                </p>
                                                                <span>
                            <i className="ti-check" />
                            <i className="ti-check" /> 2:35PM
                          </span>
                                                            </div>
                                                        </li>
                                                        <li className="you">
                                                            <figure>
                                                                <img src="images/resources/user1.jpg" alt="" />
                                                            </figure>
                                                            <div className="text-box">
                                                                <p>
                                                                    thank you for your quick reply, i am sending you a
                                                                    screenshot
                                                                    <img
                                                                        src="images/resources/screenshot-messenger.jpg"
                                                                        alt=""
                                                                    />
                                                                    <em>
                                                                        Size: 106kb <ins>download Complete</ins>
                                                                    </em>
                                                                </p>
                                                                <span>
                            <i className="ti-check" />
                            <i className="ti-check" /> 2:36PM
                          </span>
                                                            </div>
                                                        </li>
                                                        <li className="me">
                                                            <figure>
                                                                <img src="images/resources/user2.jpg" alt="" />
                                                            </figure>
                                                            <div className="text-box">
                                                                <p>
                                                                    Yes, i have to see, please follow the below link..{" "}
                                                                    <a href="#" title="">
                                                                        https://www.abc.com
                                                                    </a>
                                                                </p>
                                                                <span>
                            <i className="ti-check" />
                            <i className="ti-check" /> 2:38PM
                          </span>
                                                            </div>
                                                        </li>
                                                        <li className="me">
                                                            <figure>
                                                                <img src="images/resources/user2.jpg" alt="" />
                                                            </figure>
                                                            <div className="text-box">
                                                                <p>
                                                                    Dear You May again download the package directly..
                                                                    <span>
                              <ins>File.txt</ins> <i className="fa fa-file" />{" "}
                                                                        30MB download complete
                            </span>
                                                                </p>
                                                                <span>
                            <i className="ti-check" />
                            <i className="ti-check" /> 2:40PM
                          </span>
                                                            </div>
                                                        </li>
                                                        <li className="you">
                                                            <figure>
                                                                <img src="images/resources/user1.jpg" alt="" />
                                                            </figure>
                                                            <div className="text-box">
                                                                <div className="wave">
                                                                    <span className="dot" />
                                                                    <span className="dot" />
                                                                    <span className="dot" />
                                                                </div>
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
                                                            style={{ top: 0, height: 488, right: 0 }}
                                                        >
                                                            <div
                                                                className="ps-scrollbar-y"
                                                                tabIndex={0}
                                                                style={{ top: 0, height: 360 }}
                                                            />
                                                        </div>
                                                    </ul>
                                                </div>
                                                <div className="message-writing-box">
                                                    <form method="post">
                                                        <div className="text-area">
                                                            <input
                                                                type="text"
                                                                placeholder="write your message here.."
                                                            />
                                                            <button type="submit">
                                                                <i className="fa fa-paper-plane-o" />
                                                            </button>
                                                        </div>
                                                        <div className="emojies">
                                                            <i>
                                                                <img src="images/smiles/happy-3.png" alt="" />
                                                            </i>
                                                            <ul className="emojies-list">
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/unhappy.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img
                                                                            src="images/smiles/tongue-out-1.png"
                                                                            alt=""
                                                                        />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/suspicious.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/smiling.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/wink.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/bored.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/angry-1.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/angry.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/bored-1.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/bored-2.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/confused-1.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/confused.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/crying-1.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/crying.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/embarrassed.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/emoticons.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/happy-1.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/happy-2.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/happy-3.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/happy-4.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/ill.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/in-love.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/kissing.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/mad.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/nerd.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/ninja.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/quiet.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/sad.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/secret.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/smile.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/surprised-1.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/tongue-out.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/unhappy.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/suspicious.png" alt="" />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="attach-file">
                                                            <label className="fileContainer">
                                                                <i className="ti-clip" />
                                                                <input type="file" />
                                                            </label>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="chater-info">
                                                    <figure>
                                                        <img src="images/resources/chatuser1.jpg" alt="" />
                                                    </figure>
                                                    <h6>Andrew</h6>
                                                    <span>Online</span>
                                                    <div className="userabout">
                                                        <span>About</span>
                                                        <p>
                                                            I love reading, traveling and discovering new things.
                                                            You need to be happy in life.
                                                        </p>
                                                        <ul>
                                                            <li>
                                                                <span>Phone:</span> +123976980
                                                            </li>
                                                            <li>
                                                                <span>Website:</span>{" "}
                                                                <a href="#" title="">
                                                                    www.abc.com
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <span>Email:</span>{" "}
                                                                <a
                                                                    href="http://wpkixx.com/cdn-cgi/l/email-protection"
                                                                    className="__cf_email__"
                                                                    data-cfemail="a0d3c1cdd0ccc5e0c7cdc1c9cc8ec3cfcd"
                                                                >
                                                                    [email&nbsp;protected]
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <span>Phone:</span> Ontario, Canada
                                                            </li>
                                                        </ul>
                                                        <div className="media">
                                                            <span>Media</span>
                                                            <ul
                                                                className="ps-container ps-theme-default ps-active-y"
                                                                data-ps-id="ce70d6ba-b2c9-92ad-1e9c-9f38e1e76a7b"
                                                            >
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user1.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user2.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user3.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user4.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user5.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user6.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img src="images/resources/admin2.jpg" alt="" />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user1.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user4.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user3.jpg"
                                                                        alt=""
                                                                    />
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
                                                                    style={{ top: 0, height: 115, right: 0 }}
                                                                >
                                                                    <div
                                                                        className="ps-scrollbar-y"
                                                                        tabIndex={0}
                                                                        style={{ top: 0, height: 77 }}
                                                                    />
                                                                </div>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="link2">
                                        <div className="row merged">
                                            <div className="col-lg-12">
                                                <div className="mesg-area-head">
                                                    <div className="active-user">
                                                        <figure>
                                                            <img src="images/resources/admin.jpg" alt="" />
                                                            <span className="status f-away" />
                                                        </figure>
                                                        <div>
                                                            <h6 className="unread">Jack Carter</h6>
                                                            <span>Away</span>
                                                        </div>
                                                    </div>
                                                    <ul className="live-calls">
                                                        <li>
                                                            <span className="fa fa-phone" />
                                                        </li>
                                                        <li>
                                                            <span className="fa fa-video" />
                                                        </li>
                                                        <li>
                                                            <span className="fa fa-info-circle" />
                                                        </li>
                                                        <li>
                                                            <div className="dropdown">
                                                                <button
                                                                    className="btn"
                                                                    data-toggle="dropdown"
                                                                    aria-haspopup="true"
                                                                    aria-expanded="false"
                                                                >
                                                                    <i className="ti-view-grid" />
                                                                </button>
                                                                <div className="dropdown-menu dropdown-menu-right">
                                                                    <a className="dropdown-item audio-call" href="#">
                                                                        <i className="ti-headphone-alt" />
                                                                        Voice Call
                                                                    </a>
                                                                    <a href="#" className="dropdown-item video-call">
                                                                        <i className="ti-video-camera" />
                                                                        Video Call
                                                                    </a>
                                                                    <hr />
                                                                    <a href="#" className="dropdown-item">
                                                                        <i className="ti-server" />
                                                                        Clear History
                                                                    </a>
                                                                    <a href="#" className="dropdown-item">
                                                                        <i className="ti-hand-stop" />
                                                                        Block Contact
                                                                    </a>
                                                                    <a href="#" className="dropdown-item">
                                                                        <i className="ti-trash" />
                                                                        Delete Contact
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-8">
                                                <div
                                                    className="mesge-area conversations ps-container ps-theme-default"
                                                    data-ps-id="efd73dd4-8317-cc33-25fb-6a090efef160"
                                                >
                                                    <div className="empty-chat">
                                                        <div className="no-messages">
                                                            <i className="ti-comments" />
                                                            <p>
                                                                Seems people are shy to start the chat. Break the ice
                                                                send the first message.
                                                            </p>
                                                        </div>
                                                    </div>
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
                                                </div>
                                                <div className="message-writing-box">
                                                    <form method="post">
                                                        <div className="text-area">
                                                            <input
                                                                type="text"
                                                                placeholder="write your message here.."
                                                            />
                                                            <button type="submit">
                                                                <i className="fa fa-paper-plane-o" />
                                                            </button>
                                                        </div>
                                                        <div className="emojies">
                                                            <i>
                                                                <img src="images/smiles/happy-3.png" alt="" />
                                                            </i>
                                                            <ul className="emojies-list">
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/unhappy.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img
                                                                            src="images/smiles/tongue-out-1.png"
                                                                            alt=""
                                                                        />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/suspicious.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/smiling.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/wink.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/bored.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/angry-1.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/angry.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/bored-1.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/bored-2.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/confused-1.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/confused.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/crying-1.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/crying.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/embarrassed.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/emoticons.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/happy-1.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/happy-2.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/happy-3.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/happy-4.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/ill.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/in-love.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/kissing.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/mad.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/nerd.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/ninja.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/quiet.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/sad.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/secret.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/smile.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/surprised-1.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/tongue-out.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/unhappy.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/suspicious.png" alt="" />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="attach-file">
                                                            <label className="fileContainer">
                                                                <i className="ti-clip" />
                                                                <input type="file" />
                                                            </label>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="chater-info">
                                                    <figure>
                                                        <img src="images/resources/author.jpg" alt="" />
                                                    </figure>
                                                    <h6>Jack Carter</h6>
                                                    <span>Active a days ago</span>
                                                    <div className="userabout">
                                                        <span>About</span>
                                                        <p>
                                                            I love reading, traveling and discovering new things.
                                                            You need to be happy in life.
                                                        </p>
                                                        <ul>
                                                            <li>
                                                                <span>Phone:</span> +123976980
                                                            </li>
                                                            <li>
                                                                <span>Website:</span>{" "}
                                                                <a href="#" title="">
                                                                    www.abc.com
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <span>Email:</span>{" "}
                                                                <a
                                                                    href="http://wpkixx.com/cdn-cgi/l/email-protection"
                                                                    className="__cf_email__"
                                                                    data-cfemail="ee9d8f839e828bae89838f8782c08d8183"
                                                                >
                                                                    [email&nbsp;protected]
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <span>Phone:</span> Ontario, Canada
                                                            </li>
                                                        </ul>
                                                        <div className="media">
                                                            <span>Media</span>
                                                            <ul
                                                                className="ps-container ps-theme-default"
                                                                data-ps-id="1e71fee3-d5c9-883d-877b-856b270243d5"
                                                            >
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user1.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user2.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user3.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user4.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user5.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user6.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img src="images/resources/admin2.jpg" alt="" />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user1.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user4.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user3.jpg"
                                                                        alt=""
                                                                    />
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
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="link3">
                                        <div className="row merged">
                                            <div className="col-lg-12">
                                                <div className="mesg-area-head">
                                                    <div className="active-user">
                                                        <figure>
                                                            <img src="images/resources/friend-avatar4.jpg" alt="" />
                                                            <span className="status f-online" />
                                                        </figure>
                                                        <div>
                                                            <h6 className="unread">Julie Robert</h6>
                                                            <span>Online</span>
                                                        </div>
                                                    </div>
                                                    <ul className="live-calls">
                                                        <li>
                                                            <span className="fa fa-phone" />
                                                        </li>
                                                        <li>
                                                            <span className="fa fa-video" />
                                                        </li>
                                                        <li>
                                                            <span className="fa fa-info-circle" />
                                                        </li>
                                                        <li>
                                                            <div className="dropdown">
                                                                <button
                                                                    className="btn"
                                                                    data-toggle="dropdown"
                                                                    aria-haspopup="true"
                                                                    aria-expanded="false"
                                                                >
                                                                    <i className="ti-view-grid" />
                                                                </button>
                                                                <div className="dropdown-menu dropdown-menu-right">
                                                                    <a className="dropdown-item audio-call" href="#">
                                                                        <i className="ti-headphone-alt" />
                                                                        Voice Call
                                                                    </a>
                                                                    <a href="#" className="dropdown-item video-call">
                                                                        <i className="ti-video-camera" />
                                                                        Video Call
                                                                    </a>
                                                                    <hr />
                                                                    <a href="#" className="dropdown-item">
                                                                        <i className="ti-server" />
                                                                        Clear History
                                                                    </a>
                                                                    <a href="#" className="dropdown-item">
                                                                        <i className="ti-hand-stop" />
                                                                        Block Contact
                                                                    </a>
                                                                    <a href="#" className="dropdown-item">
                                                                        <i className="ti-trash" />
                                                                        Delete Contact
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-8">
                                                <div
                                                    className="mesge-area conversations ps-container ps-theme-default"
                                                    data-ps-id="d89240a4-0af8-0b10-7295-c5251b195af0"
                                                >
                                                    <div className="empty-chat">
                                                        <div className="no-messages">
                                                            <i className="ti-comments" />
                                                            <p>
                                                                Seems people are shy to start the chat. Break the ice
                                                                send the first message.
                                                            </p>
                                                        </div>
                                                    </div>
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
                                                </div>
                                                <div className="message-writing-box">
                                                    <form method="post">
                                                        <div className="text-area">
                                                            <input
                                                                type="text"
                                                                placeholder="write your message here.."
                                                            />
                                                            <button type="submit">
                                                                <i className="fa fa-paper-plane-o" />
                                                            </button>
                                                        </div>
                                                        <div className="emojies">
                                                            <i>
                                                                <img src="images/smiles/happy-3.png" alt="" />
                                                            </i>
                                                            <ul className="emojies-list">
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/unhappy.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img
                                                                            src="images/smiles/tongue-out-1.png"
                                                                            alt=""
                                                                        />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/suspicious.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/smiling.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/wink.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/bored.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/angry-1.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/angry.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/bored-1.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/bored-2.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/confused-1.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/confused.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/crying-1.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/crying.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/embarrassed.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/emoticons.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/happy-1.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/happy-2.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/happy-3.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/happy-4.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/ill.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/in-love.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/kissing.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/mad.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/nerd.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/ninja.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/quiet.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/sad.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/secret.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/smile.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/surprised-1.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/tongue-out.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/unhappy.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/suspicious.png" alt="" />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="attach-file">
                                                            <label className="fileContainer">
                                                                <i className="ti-clip" />
                                                                <input type="file" />
                                                            </label>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="chater-info">
                                                    <figure>
                                                        <img src="images/resources/chatuser3.jpg" alt="" />
                                                    </figure>
                                                    <h6>Julie Robert</h6>
                                                    <span>Active one hours ago</span>
                                                    <div className="userabout">
                                                        <span>About</span>
                                                        <p>
                                                            I love reading, traveling and discovering new things.
                                                            You need to be happy in life.
                                                        </p>
                                                        <ul>
                                                            <li>
                                                                <span>Phone:</span> +123976980
                                                            </li>
                                                            <li>
                                                                <span>Website:</span>{" "}
                                                                <a href="#" title="">
                                                                    www.abc.com
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <span>Email:</span>{" "}
                                                                <a
                                                                    href="http://wpkixx.com/cdn-cgi/l/email-protection"
                                                                    className="__cf_email__"
                                                                    data-cfemail="c0b3a1adb0aca580a7ada1a9aceea3afad"
                                                                >
                                                                    [email&nbsp;protected]
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <span>Phone:</span> Ontario, Canada
                                                            </li>
                                                        </ul>
                                                        <div className="media">
                                                            <span>Media</span>
                                                            <ul
                                                                className="ps-container ps-theme-default"
                                                                data-ps-id="787f6bfd-7301-aa2c-2495-a89f5c661e3b"
                                                            >
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user1.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user2.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user3.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user4.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user5.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user6.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img src="images/resources/admin2.jpg" alt="" />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user1.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user4.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user3.jpg"
                                                                        alt=""
                                                                    />
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
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="link4">
                                        <div className="row merged">
                                            <div className="col-lg-12">
                                                <div className="mesg-area-head">
                                                    <div className="active-user">
                                                        <figure>
                                                            <img src="images/resources/friend-avatar5.jpg" alt="" />
                                                            <span className="status f-offline" />
                                                        </figure>
                                                        <div>
                                                            <h6 className="unread">Jhon Doe</h6>
                                                            <span>Offline</span>
                                                        </div>
                                                    </div>
                                                    <ul className="live-calls">
                                                        <li>
                                                            <span className="fa fa-phone" />
                                                        </li>
                                                        <li>
                                                            <span className="fa fa-video" />
                                                        </li>
                                                        <li>
                                                            <span className="fa fa-info-circle" />
                                                        </li>
                                                        <li>
                                                            <div className="dropdown">
                                                                <button
                                                                    className="btn"
                                                                    data-toggle="dropdown"
                                                                    aria-haspopup="true"
                                                                    aria-expanded="false"
                                                                >
                                                                    <i className="ti-view-grid" />
                                                                </button>
                                                                <div className="dropdown-menu dropdown-menu-right">
                                                                    <a className="dropdown-item audio-call" href="#">
                                                                        <i className="ti-headphone-alt" />
                                                                        Voice Call
                                                                    </a>
                                                                    <a href="#" className="dropdown-item video-call">
                                                                        <i className="ti-video-camera" />
                                                                        Video Call
                                                                    </a>
                                                                    <hr />
                                                                    <a href="#" className="dropdown-item">
                                                                        <i className="ti-server" />
                                                                        Clear History
                                                                    </a>
                                                                    <a href="#" className="dropdown-item">
                                                                        <i className="ti-hand-stop" />
                                                                        Block Contact
                                                                    </a>
                                                                    <a href="#" className="dropdown-item">
                                                                        <i className="ti-trash" />
                                                                        Delete Contact
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-8">
                                                <div
                                                    className="mesge-area conversations ps-container ps-theme-default"
                                                    data-ps-id="ccce4605-f39e-8a3e-fe1c-484c250ee02c"
                                                >
                                                    <div className="empty-chat">
                                                        <div className="no-messages">
                                                            <i className="ti-comments" />
                                                            <p>
                                                                Seems people are shy to start the chat. Break the ice
                                                                send the first message.
                                                            </p>
                                                        </div>
                                                    </div>
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
                                                </div>
                                                <div className="message-writing-box">
                                                    <form method="post">
                                                        <div className="text-area">
                                                            <input
                                                                type="text"
                                                                placeholder="write your message here.."
                                                            />
                                                            <button type="submit">
                                                                <i className="fa fa-paper-plane-o" />
                                                            </button>
                                                        </div>
                                                        <div className="emojies">
                                                            <i>
                                                                <img src="images/smiles/happy-3.png" alt="" />
                                                            </i>
                                                            <ul className="emojies-list">
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/unhappy.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img
                                                                            src="images/smiles/tongue-out-1.png"
                                                                            alt=""
                                                                        />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/suspicious.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/smiling.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/wink.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/bored.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/angry-1.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/angry.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/bored-1.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/bored-2.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/confused-1.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/confused.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/crying-1.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/crying.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/embarrassed.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/emoticons.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/happy-1.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/happy-2.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/happy-3.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/happy-4.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/ill.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/in-love.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/kissing.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/mad.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/nerd.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/ninja.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/quiet.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/sad.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/secret.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/smile.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/surprised-1.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/tongue-out.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/unhappy.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/suspicious.png" alt="" />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="attach-file">
                                                            <label className="fileContainer">
                                                                <i className="ti-clip" />
                                                                <input type="file" />
                                                            </label>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="chater-info">
                                                    <figure>
                                                        <img src="images/resources/chatuser2.jpg" alt="" />
                                                    </figure>
                                                    <h6>Jhon Doe</h6>
                                                    <span>Active 5 hours ago</span>
                                                    <div className="userabout">
                                                        <span>About</span>
                                                        <p>
                                                            I love reading, traveling and discovering new things.
                                                            You need to be happy in life.
                                                        </p>
                                                        <ul>
                                                            <li>
                                                                <span>Phone:</span> +123976980
                                                            </li>
                                                            <li>
                                                                <span>Website:</span>{" "}
                                                                <a href="#" title="">
                                                                    www.abc.com
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <span>Email:</span>{" "}
                                                                <a
                                                                    href="http://wpkixx.com/cdn-cgi/l/email-protection"
                                                                    className="__cf_email__"
                                                                    data-cfemail="84f7e5e9f4e8e1c4e3e9e5ede8aae7ebe9"
                                                                >
                                                                    [email&nbsp;protected]
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <span>Phone:</span> Ontario, Canada
                                                            </li>
                                                        </ul>
                                                        <div className="media">
                                                            <span>Media</span>
                                                            <ul
                                                                className="ps-container ps-theme-default"
                                                                data-ps-id="b851b527-abdf-a34c-950c-67b926ff9400"
                                                            >
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user1.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user2.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user3.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user4.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user5.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user6.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img src="images/resources/admin2.jpg" alt="" />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user1.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user4.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user3.jpg"
                                                                        alt=""
                                                                    />
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
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="link5">
                                        <div className="row merged">
                                            <div className="col-lg-12">
                                                <div className="mesg-area-head">
                                                    <div className="active-user">
                                                        <figure>
                                                            <img src="images/resources/friend-avatar6.jpg" alt="" />
                                                            <span className="status f-online" />
                                                        </figure>
                                                        <div>
                                                            <h6 className="unread">Single Men</h6>
                                                            <span>Online</span>
                                                        </div>
                                                    </div>
                                                    <ul className="live-calls">
                                                        <li>
                                                            <span className="fa fa-phone" />
                                                        </li>
                                                        <li>
                                                            <span className="fa fa-video" />
                                                        </li>
                                                        <li>
                                                            <span className="fa fa-info-circle" />
                                                        </li>
                                                        <li>
                                                            <div className="dropdown">
                                                                <button
                                                                    className="btn"
                                                                    data-toggle="dropdown"
                                                                    aria-haspopup="true"
                                                                    aria-expanded="false"
                                                                >
                                                                    <i className="ti-view-grid" />
                                                                </button>
                                                                <div className="dropdown-menu dropdown-menu-right">
                                                                    <a className="dropdown-item audio-call" href="#">
                                                                        <i className="ti-headphone-alt" />
                                                                        Voice Call
                                                                    </a>
                                                                    <a href="#" className="dropdown-item video-call">
                                                                        <i className="ti-video-camera" />
                                                                        Video Call
                                                                    </a>
                                                                    <hr />
                                                                    <a href="#" className="dropdown-item">
                                                                        <i className="ti-server" />
                                                                        Clear History
                                                                    </a>
                                                                    <a href="#" className="dropdown-item">
                                                                        <i className="ti-hand-stop" />
                                                                        Block Contact
                                                                    </a>
                                                                    <a href="#" className="dropdown-item">
                                                                        <i className="ti-trash" />
                                                                        Delete Contact
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-8">
                                                <div
                                                    className="mesge-area conversations ps-container ps-theme-default"
                                                    data-ps-id="a5cdce0e-e507-7b24-042a-b0186b416e2a"
                                                >
                                                    <div className="empty-chat">
                                                        <div className="no-messages">
                                                            <i className="ti-comments" />
                                                            <p>
                                                                Seems people are shy to start the chat. Break the ice
                                                                send the first message.
                                                            </p>
                                                        </div>
                                                    </div>
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
                                                </div>
                                                <div className="message-writing-box">
                                                    <form method="post">
                                                        <div className="text-area">
                                                            <input
                                                                type="text"
                                                                placeholder="write your message here.."
                                                            />
                                                            <button type="submit">
                                                                <i className="fa fa-paper-plane-o" />
                                                            </button>
                                                        </div>
                                                        <div className="emojies">
                                                            <i>
                                                                <img src="images/smiles/happy-3.png" alt="" />
                                                            </i>
                                                            <ul className="emojies-list">
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/unhappy.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img
                                                                            src="images/smiles/tongue-out-1.png"
                                                                            alt=""
                                                                        />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/suspicious.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/smiling.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/wink.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/bored.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/angry-1.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/angry.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/bored-1.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/bored-2.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/confused-1.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/confused.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/crying-1.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/crying.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/embarrassed.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/emoticons.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/happy-1.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/happy-2.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/happy-3.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/happy-4.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/ill.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/in-love.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/kissing.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/mad.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/nerd.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/ninja.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/quiet.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/sad.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/secret.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/smile.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/surprised-1.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/tongue-out.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/unhappy.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/suspicious.png" alt="" />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="attach-file">
                                                            <label className="fileContainer">
                                                                <i className="ti-clip" />
                                                                <input type="file" />
                                                            </label>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="chater-info">
                                                    <figure>
                                                        <img src="images/resources/chatuser4.jpg" alt="" />
                                                    </figure>
                                                    <h6>Single Men</h6>
                                                    <span>Active 2 hours ago</span>
                                                    <div className="userabout">
                                                        <span>About</span>
                                                        <p>
                                                            I love reading, traveling and discovering new things.
                                                            You need to be happy in life.
                                                        </p>
                                                        <ul>
                                                            <li>
                                                                <span>Phone:</span> +123976980
                                                            </li>
                                                            <li>
                                                                <span>Website:</span>{" "}
                                                                <a href="#" title="">
                                                                    www.abc.com
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <span>Email:</span>{" "}
                                                                <a
                                                                    href="http://wpkixx.com/cdn-cgi/l/email-protection"
                                                                    className="__cf_email__"
                                                                    data-cfemail="f083919d809c95b0979d91999cde939f9d"
                                                                >
                                                                    [email&nbsp;protected]
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <span>Phone:</span> Ontario, Canada
                                                            </li>
                                                        </ul>
                                                        <div className="media">
                                                            <span>Media</span>
                                                            <ul
                                                                className="ps-container ps-theme-default"
                                                                data-ps-id="4d42593d-fdc9-e5d8-2118-140958b25785"
                                                            >
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user1.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user2.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user3.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user4.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user5.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user6.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img src="images/resources/admin2.jpg" alt="" />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user1.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user4.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user3.jpg"
                                                                        alt=""
                                                                    />
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
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="link6">
                                        <div className="row merged">
                                            <div className="col-lg-12">
                                                <div className="mesg-area-head">
                                                    <div className="active-user">
                                                        <figure>
                                                            <img src="images/resources/friend-avatar7.jpg" alt="" />
                                                            <span className="status f-offline" />
                                                        </figure>
                                                        <div>
                                                            <h6 className="unread">Sarah Jane</h6>
                                                            <span>Offline</span>
                                                        </div>
                                                    </div>
                                                    <ul className="live-calls">
                                                        <li>
                                                            <span className="fa fa-phone" />
                                                        </li>
                                                        <li>
                                                            <span className="fa fa-video" />
                                                        </li>
                                                        <li>
                                                            <span className="fa fa-info-circle" />
                                                        </li>
                                                        <li>
                                                            <div className="dropdown">
                                                                <button
                                                                    className="btn"
                                                                    data-toggle="dropdown"
                                                                    aria-haspopup="true"
                                                                    aria-expanded="false"
                                                                >
                                                                    <i className="ti-view-grid" />
                                                                </button>
                                                                <div className="dropdown-menu dropdown-menu-right">
                                                                    <a className="dropdown-item audio-call" href="#">
                                                                        <i className="ti-headphone-alt" />
                                                                        Voice Call
                                                                    </a>
                                                                    <a href="#" className="dropdown-item video-call">
                                                                        <i className="ti-video-camera" />
                                                                        Video Call
                                                                    </a>
                                                                    <hr />
                                                                    <a href="#" className="dropdown-item">
                                                                        <i className="ti-server" />
                                                                        Clear History
                                                                    </a>
                                                                    <a href="#" className="dropdown-item">
                                                                        <i className="ti-hand-stop" />
                                                                        Block Contact
                                                                    </a>
                                                                    <a href="#" className="dropdown-item">
                                                                        <i className="ti-trash" />
                                                                        Delete Contact
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-8">
                                                <div
                                                    className="mesge-area conversations ps-container ps-theme-default"
                                                    data-ps-id="2dc15838-2399-8bd0-9164-2b5772e6b5a8"
                                                >
                                                    <div className="empty-chat">
                                                        <div className="no-messages">
                                                            <i className="ti-comments" />
                                                            <p>
                                                                Seems people are shy to start the chat. Break the ice
                                                                send the first message.
                                                            </p>
                                                        </div>
                                                    </div>
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
                                                </div>
                                                <div className="message-writing-box">
                                                    <form method="post">
                                                        <div className="text-area">
                                                            <input
                                                                type="text"
                                                                placeholder="write your message here.."
                                                            />
                                                            <button type="submit">
                                                                <i className="fa fa-paper-plane-o" />
                                                            </button>
                                                        </div>
                                                        <div className="emojies">
                                                            <i>
                                                                <img src="images/smiles/happy-3.png" alt="" />
                                                            </i>
                                                            <ul className="emojies-list">
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/unhappy.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img
                                                                            src="images/smiles/tongue-out-1.png"
                                                                            alt=""
                                                                        />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/suspicious.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/smiling.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/wink.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/bored.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/angry-1.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/angry.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/bored-1.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/bored-2.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/confused-1.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/confused.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/crying-1.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/crying.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/embarrassed.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/emoticons.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/happy-1.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/happy-2.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/happy-3.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/happy-4.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/ill.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/in-love.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/kissing.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/mad.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/nerd.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/ninja.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/quiet.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/sad.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/secret.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/smile.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/surprised-1.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/tongue-out.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/unhappy.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/suspicious.png" alt="" />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="attach-file">
                                                            <label className="fileContainer">
                                                                <i className="ti-clip" />
                                                                <input type="file" />
                                                            </label>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="chater-info">
                                                    <figure>
                                                        <img src="images/resources/chatuser5.jpg" alt="" />
                                                    </figure>
                                                    <h6>Sarah Jane</h6>
                                                    <span>Active 2 hours ago</span>
                                                    <div className="userabout">
                                                        <span>About</span>
                                                        <p>
                                                            I love reading, traveling and discovering new things.
                                                            You need to be happy in life.
                                                        </p>
                                                        <ul>
                                                            <li>
                                                                <span>Phone:</span> +123976980
                                                            </li>
                                                            <li>
                                                                <span>Website:</span>{" "}
                                                                <a href="#" title="">
                                                                    www.abc.com
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <span>Email:</span>{" "}
                                                                <a
                                                                    href="http://wpkixx.com/cdn-cgi/l/email-protection"
                                                                    className="__cf_email__"
                                                                    data-cfemail="f281939f829e97b2959f939b9edc919d9f"
                                                                >
                                                                    [email&nbsp;protected]
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <span>Phone:</span> Ontario, Canada
                                                            </li>
                                                        </ul>
                                                        <div className="media">
                                                            <span>Media</span>
                                                            <ul
                                                                className="ps-container ps-theme-default"
                                                                data-ps-id="58538007-4327-9aa6-d713-5b3fa4220606"
                                                            >
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user1.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user2.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user3.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user4.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user5.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user6.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img src="images/resources/admin2.jpg" alt="" />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user1.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user4.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user3.jpg"
                                                                        alt=""
                                                                    />
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
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="link7">
                                        <div className="row merged">
                                            <div className="col-lg-12">
                                                <div className="mesg-area-head">
                                                    <div className="active-user">
                                                        <figure>
                                                            <img src="images/resources/friend-avatar8.jpg" alt="" />
                                                            <span className="status f-online" />
                                                        </figure>
                                                        <div>
                                                            <h6 className="unread">Julie Robert</h6>
                                                            <span>Online</span>
                                                        </div>
                                                    </div>
                                                    <ul className="live-calls">
                                                        <li>
                                                            <span className="fa fa-phone" />
                                                        </li>
                                                        <li>
                                                            <span className="fa fa-video" />
                                                        </li>
                                                        <li>
                                                            <span className="fa fa-info-circle" />
                                                        </li>
                                                        <li>
                                                            <div className="dropdown">
                                                                <button
                                                                    className="btn"
                                                                    data-toggle="dropdown"
                                                                    aria-haspopup="true"
                                                                    aria-expanded="false"
                                                                >
                                                                    <i className="ti-view-grid" />
                                                                </button>
                                                                <div className="dropdown-menu dropdown-menu-right">
                                                                    <a className="dropdown-item audio-call" href="#">
                                                                        <i className="ti-headphone-alt" />
                                                                        Voice Call
                                                                    </a>
                                                                    <a href="#" className="dropdown-item video-call">
                                                                        <i className="ti-video-camera" />
                                                                        Video Call
                                                                    </a>
                                                                    <hr />
                                                                    <a href="#" className="dropdown-item">
                                                                        <i className="ti-server" />
                                                                        Clear History
                                                                    </a>
                                                                    <a href="#" className="dropdown-item">
                                                                        <i className="ti-hand-stop" />
                                                                        Block Contact
                                                                    </a>
                                                                    <a href="#" className="dropdown-item">
                                                                        <i className="ti-trash" />
                                                                        Delete Contact
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-8">
                                                <div
                                                    className="mesge-area conversations ps-container ps-theme-default"
                                                    data-ps-id="5876dfae-0852-afab-df2a-2e7362ca2a78"
                                                >
                                                    <div className="empty-chat">
                                                        <div className="no-messages">
                                                            <i className="ti-comments" />
                                                            <p>
                                                                Seems people are shy to start the chat. Break the ice
                                                                send the first message.
                                                            </p>
                                                        </div>
                                                    </div>
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
                                                </div>
                                                <div className="message-writing-box">
                                                    <form method="post">
                                                        <div className="text-area">
                                                            <input
                                                                type="text"
                                                                placeholder="write your message here.."
                                                            />
                                                            <button type="submit">
                                                                <i className="fa fa-paper-plane-o" />
                                                            </button>
                                                        </div>
                                                        <div className="emojies">
                                                            <i>
                                                                <img src="images/smiles/happy-3.png" alt="" />
                                                            </i>
                                                            <ul className="emojies-list">
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/unhappy.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img
                                                                            src="images/smiles/tongue-out-1.png"
                                                                            alt=""
                                                                        />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/suspicious.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/smiling.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/wink.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/bored.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/angry-1.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/angry.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/bored-1.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/bored-2.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/confused-1.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/confused.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/crying-1.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/crying.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/embarrassed.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/emoticons.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/happy-1.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/happy-2.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/happy-3.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/happy-4.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/ill.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/in-love.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/kissing.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/mad.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/nerd.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/ninja.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/quiet.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/sad.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/secret.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/smile.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/surprised-1.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/tongue-out.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/unhappy.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/suspicious.png" alt="" />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="attach-file">
                                                            <label className="fileContainer">
                                                                <i className="ti-clip" />
                                                                <input type="file" />
                                                            </label>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="chater-info">
                                                    <figure>
                                                        <img src="images/resources/chatuser6.jpg" alt="" />
                                                    </figure>
                                                    <h6>Julie Robert</h6>
                                                    <span>Active 2 days ago</span>
                                                    <div className="userabout">
                                                        <span>About</span>
                                                        <p>
                                                            I love reading, traveling and discovering new things.
                                                            You need to be happy in life.
                                                        </p>
                                                        <ul>
                                                            <li>
                                                                <span>Phone:</span> +123976980
                                                            </li>
                                                            <li>
                                                                <span>Website:</span>{" "}
                                                                <a href="#" title="">
                                                                    www.abc.com
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <span>Email:</span>{" "}
                                                                <a
                                                                    href="http://wpkixx.com/cdn-cgi/l/email-protection"
                                                                    className="__cf_email__"
                                                                    data-cfemail="f685979b869a93b6919b979f9ad895999b"
                                                                >
                                                                    [email&nbsp;protected]
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <span>Phone:</span> Ontario, Canada
                                                            </li>
                                                        </ul>
                                                        <div className="media">
                                                            <span>Media</span>
                                                            <ul
                                                                className="ps-container ps-theme-default"
                                                                data-ps-id="b6c2ff58-f52e-082a-1e16-6a1d899937c3"
                                                            >
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user1.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user2.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user3.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user4.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user5.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user6.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img src="images/resources/admin2.jpg" alt="" />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user1.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user4.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user3.jpg"
                                                                        alt=""
                                                                    />
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
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="link8">
                                        <div className="row merged">
                                            <div className="col-lg-12">
                                                <div className="mesg-area-head">
                                                    <div className="active-user">
                                                        <figure>
                                                            <img src="images/resources/friend-avatar6.jpg" alt="" />
                                                            <span className="status f-away" />
                                                        </figure>
                                                        <div>
                                                            <h6 className="unread">Frank Will</h6>
                                                            <span>Away</span>
                                                        </div>
                                                    </div>
                                                    <ul className="live-calls">
                                                        <li>
                                                            <span className="fa fa-phone" />
                                                        </li>
                                                        <li>
                                                            <span className="fa fa-video" />
                                                        </li>
                                                        <li>
                                                            <span className="fa fa-info-circle" />
                                                        </li>
                                                        <li>
                                                            <div className="dropdown">
                                                                <button
                                                                    className="btn"
                                                                    data-toggle="dropdown"
                                                                    aria-haspopup="true"
                                                                    aria-expanded="false"
                                                                >
                                                                    <i className="ti-view-grid" />
                                                                </button>
                                                                <div className="dropdown-menu dropdown-menu-right">
                                                                    <a className="dropdown-item audio-call" href="#">
                                                                        <i className="ti-headphone-alt" />
                                                                        Voice Call
                                                                    </a>
                                                                    <a href="#" className="dropdown-item video-call">
                                                                        <i className="ti-video-camera" />
                                                                        Video Call
                                                                    </a>
                                                                    <hr />
                                                                    <a href="#" className="dropdown-item">
                                                                        <i className="ti-server" />
                                                                        Clear History
                                                                    </a>
                                                                    <a href="#" className="dropdown-item">
                                                                        <i className="ti-hand-stop" />
                                                                        Block Contact
                                                                    </a>
                                                                    <a href="#" className="dropdown-item">
                                                                        <i className="ti-trash" />
                                                                        Delete Contact
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-8">
                                                <div
                                                    className="mesge-area conversations ps-container ps-theme-default"
                                                    data-ps-id="d2e6af17-4f60-d770-b90e-932398b52590"
                                                >
                                                    <div className="empty-chat">
                                                        <div className="no-messages">
                                                            <i className="ti-comments" />
                                                            <p>
                                                                Seems people are shy to start the chat. Break the ice
                                                                send the first message.
                                                            </p>
                                                        </div>
                                                    </div>
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
                                                </div>
                                                <div className="message-writing-box">
                                                    <form method="post">
                                                        <div className="text-area">
                                                            <input
                                                                type="text"
                                                                placeholder="write your message here.."
                                                            />
                                                            <button type="submit">
                                                                <i className="fa fa-paper-plane-o" />
                                                            </button>
                                                        </div>
                                                        <div className="emojies">
                                                            <i>
                                                                <img src="images/smiles/happy-3.png" alt="" />
                                                            </i>
                                                            <ul className="emojies-list">
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/unhappy.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img
                                                                            src="images/smiles/tongue-out-1.png"
                                                                            alt=""
                                                                        />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/suspicious.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/smiling.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/wink.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/bored.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/angry-1.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/angry.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/bored-1.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/bored-2.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/confused-1.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/confused.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/crying-1.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/crying.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/embarrassed.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/emoticons.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/happy-1.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/happy-2.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/happy-3.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/happy-4.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/ill.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/in-love.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/kissing.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/mad.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/nerd.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/ninja.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/quiet.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/sad.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/secret.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/smile.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/surprised-1.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/tongue-out.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/unhappy.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/suspicious.png" alt="" />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="attach-file">
                                                            <label className="fileContainer">
                                                                <i className="ti-clip" />
                                                                <input type="file" />
                                                            </label>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="chater-info">
                                                    <figure>
                                                        <img src="images/resources/chatuser4.jpg" alt="" />
                                                    </figure>
                                                    <h6>Frank Will</h6>
                                                    <span>Active 2 months ago</span>
                                                    <div className="userabout">
                                                        <span>About</span>
                                                        <p>
                                                            I love reading, traveling and discovering new things.
                                                            You need to be happy in life.
                                                        </p>
                                                        <ul>
                                                            <li>
                                                                <span>Phone:</span> +123976980
                                                            </li>
                                                            <li>
                                                                <span>Website:</span>{" "}
                                                                <a href="#" title="">
                                                                    www.abc.com
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <span>Email:</span>{" "}
                                                                <a
                                                                    href="http://wpkixx.com/cdn-cgi/l/email-protection"
                                                                    className="__cf_email__"
                                                                    data-cfemail="5625373b263a3316313b373f3a7835393b"
                                                                >
                                                                    [email&nbsp;protected]
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <span>Phone:</span> Ontario, Canada
                                                            </li>
                                                        </ul>
                                                        <div className="media">
                                                            <span>Media</span>
                                                            <ul
                                                                className="ps-container ps-theme-default"
                                                                data-ps-id="75ad99d9-9c30-f753-1a50-b57931dcb04b"
                                                            >
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user1.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user2.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user3.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user4.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user5.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user6.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img src="images/resources/admin2.jpg" alt="" />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user1.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user4.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user3.jpg"
                                                                        alt=""
                                                                    />
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
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="link9">
                                        <div className="row merged">
                                            <div className="col-lg-12">
                                                <div className="mesg-area-head">
                                                    <div className="active-user">
                                                        <figure>
                                                            <img src="images/resources/friend-avatar9.jpg" alt="" />
                                                            <span className="status f-online" />
                                                        </figure>
                                                        <div>
                                                            <h6 className="unread">Niclos Cage</h6>
                                                            <span>Online</span>
                                                        </div>
                                                    </div>
                                                    <ul className="live-calls">
                                                        <li>
                                                            <span className="fa fa-phone" />
                                                        </li>
                                                        <li>
                                                            <span className="fa fa-video" />
                                                        </li>
                                                        <li>
                                                            <span className="fa fa-info-circle" />
                                                        </li>
                                                        <li>
                                                            <div className="dropdown">
                                                                <button
                                                                    className="btn"
                                                                    data-toggle="dropdown"
                                                                    aria-haspopup="true"
                                                                    aria-expanded="false"
                                                                >
                                                                    <i className="ti-view-grid" />
                                                                </button>
                                                                <div className="dropdown-menu dropdown-menu-right">
                                                                    <a className="dropdown-item audio-call" href="#">
                                                                        <i className="ti-headphone-alt" />
                                                                        Voice Call
                                                                    </a>
                                                                    <a href="#" className="dropdown-item video-call">
                                                                        <i className="ti-video-camera" />
                                                                        Video Call
                                                                    </a>
                                                                    <hr />
                                                                    <a href="#" className="dropdown-item">
                                                                        <i className="ti-server" />
                                                                        Clear History
                                                                    </a>
                                                                    <a href="#" className="dropdown-item">
                                                                        <i className="ti-hand-stop" />
                                                                        Block Contact
                                                                    </a>
                                                                    <a href="#" className="dropdown-item">
                                                                        <i className="ti-trash" />
                                                                        Delete Contact
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-8">
                                                <div
                                                    className="mesge-area conversations ps-container ps-theme-default"
                                                    data-ps-id="d4076885-94b3-44b5-e5c7-5e4c224803be"
                                                >
                                                    <div className="empty-chat">
                                                        <div className="no-messages">
                                                            <i className="ti-comments" />
                                                            <p>
                                                                Seems people are shy to start the chat. Break the ice
                                                                send the first message.
                                                            </p>
                                                        </div>
                                                    </div>
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
                                                </div>
                                                <div className="message-writing-box">
                                                    <form method="post">
                                                        <div className="text-area">
                                                            <input
                                                                type="text"
                                                                placeholder="write your message here.."
                                                            />
                                                            <button type="submit">
                                                                <i className="fa fa-paper-plane-o" />
                                                            </button>
                                                        </div>
                                                        <div className="emojies">
                                                            <i>
                                                                <img src="images/smiles/happy-3.png" alt="" />
                                                            </i>
                                                            <ul className="emojies-list">
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/unhappy.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img
                                                                            src="images/smiles/tongue-out-1.png"
                                                                            alt=""
                                                                        />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/suspicious.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/smiling.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/wink.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/bored.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/angry-1.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/angry.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/bored-1.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/bored-2.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/confused-1.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/confused.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/crying-1.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/crying.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/embarrassed.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/emoticons.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/happy-1.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/happy-2.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/happy-3.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/happy-4.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/ill.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/in-love.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/kissing.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/mad.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/nerd.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/ninja.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/quiet.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/sad.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/secret.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/smile.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/surprised-1.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/tongue-out.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/unhappy.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/suspicious.png" alt="" />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="attach-file">
                                                            <label className="fileContainer">
                                                                <i className="ti-clip" />
                                                                <input type="file" />
                                                            </label>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="chater-info">
                                                    <figure>
                                                        <img src="images/resources/chatuser8.jpg" alt="" />
                                                    </figure>
                                                    <h6>Niclos Cage</h6>
                                                    <span>Active 10 hours ago</span>
                                                    <div className="userabout">
                                                        <span>About</span>
                                                        <p>
                                                            I love reading, traveling and discovering new things.
                                                            You need to be happy in life.
                                                        </p>
                                                        <ul>
                                                            <li>
                                                                <span>Phone:</span> +123976980
                                                            </li>
                                                            <li>
                                                                <span>Website:</span>{" "}
                                                                <a href="#" title="">
                                                                    www.abc.com
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <span>Email:</span>{" "}
                                                                <a
                                                                    href="http://wpkixx.com/cdn-cgi/l/email-protection"
                                                                    className="__cf_email__"
                                                                    data-cfemail="6714060a170b0227000a060e0b4904080a"
                                                                >
                                                                    [email&nbsp;protected]
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <span>Phone:</span> Ontario, Canada
                                                            </li>
                                                        </ul>
                                                        <div className="media">
                                                            <span>Media</span>
                                                            <ul
                                                                className="ps-container ps-theme-default"
                                                                data-ps-id="1f908b26-c142-2887-b1da-5efebbc96e87"
                                                            >
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user1.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user2.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user3.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user4.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user5.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user6.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img src="images/resources/admin2.jpg" alt="" />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user1.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user4.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user3.jpg"
                                                                        alt=""
                                                                    />
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
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="link10">
                                        <div className="row merged">
                                            <div className="col-lg-12">
                                                <div className="mesg-area-head">
                                                    <div className="active-user">
                                                        <figure>
                                                            <img src="images/resources/friend-avatar8.jpg" alt="" />
                                                            <span className="status f-offline" />
                                                        </figure>
                                                        <div>
                                                            <h6 className="unread">Kelly Quin</h6>
                                                            <span>Offline</span>
                                                        </div>
                                                    </div>
                                                    <ul className="live-calls">
                                                        <li>
                                                            <span className="fa fa-phone" />
                                                        </li>
                                                        <li>
                                                            <span className="fa fa-video" />
                                                        </li>
                                                        <li>
                                                            <span className="fa fa-info-circle" />
                                                        </li>
                                                        <li>
                                                            <div className="dropdown">
                                                                <button
                                                                    className="btn"
                                                                    data-toggle="dropdown"
                                                                    aria-haspopup="true"
                                                                    aria-expanded="false"
                                                                >
                                                                    <i className="ti-view-grid" />
                                                                </button>
                                                                <div className="dropdown-menu dropdown-menu-right">
                                                                    <a className="dropdown-item audio-call" href="#">
                                                                        <i className="ti-headphone-alt" />
                                                                        Voice Call
                                                                    </a>
                                                                    <a href="#" className="dropdown-item video-call">
                                                                        <i className="ti-video-camera" />
                                                                        Video Call
                                                                    </a>
                                                                    <hr />
                                                                    <a href="#" className="dropdown-item">
                                                                        <i className="ti-server" />
                                                                        Clear History
                                                                    </a>
                                                                    <a href="#" className="dropdown-item">
                                                                        <i className="ti-hand-stop" />
                                                                        Block Contact
                                                                    </a>
                                                                    <a href="#" className="dropdown-item">
                                                                        <i className="ti-trash" />
                                                                        Delete Contact
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-8">
                                                <div
                                                    className="mesge-area conversations ps-container ps-theme-default"
                                                    data-ps-id="98998345-ea50-503a-41fb-cc589bc0c3e0"
                                                >
                                                    <div className="empty-chat">
                                                        <div className="no-messages">
                                                            <i className="ti-comments" />
                                                            <p>
                                                                Seems people are shy to start the chat. Break the ice
                                                                send the first message.
                                                            </p>
                                                        </div>
                                                    </div>
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
                                                </div>
                                                <div className="message-writing-box">
                                                    <form method="post">
                                                        <div className="text-area">
                                                            <input
                                                                type="text"
                                                                placeholder="write your message here.."
                                                            />
                                                            <button type="submit">
                                                                <i className="fa fa-paper-plane-o" />
                                                            </button>
                                                        </div>
                                                        <div className="emojies">
                                                            <i>
                                                                <img src="images/smiles/happy-3.png" alt="" />
                                                            </i>
                                                            <ul className="emojies-list">
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/unhappy.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img
                                                                            src="images/smiles/tongue-out-1.png"
                                                                            alt=""
                                                                        />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/suspicious.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/smiling.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/wink.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/bored.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/angry-1.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/angry.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/bored-1.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/bored-2.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/confused-1.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/confused.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/crying-1.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/crying.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/embarrassed.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/emoticons.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/happy-1.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/happy-2.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/happy-3.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/happy-4.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/ill.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/in-love.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/kissing.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/mad.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/nerd.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/ninja.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/quiet.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/sad.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/secret.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/smile.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/surprised-1.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/tongue-out.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/unhappy.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="">
                                                                        <img src="images/smiles/suspicious.png" alt="" />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="attach-file">
                                                            <label className="fileContainer">
                                                                <i className="ti-clip" />
                                                                <input type="file" />
                                                            </label>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="chater-info">
                                                    <figure>
                                                        <img src="images/resources/chatuser6.jpg" alt="" />
                                                    </figure>
                                                    <h6>Kelly Quin</h6>
                                                    <span>Active 10 hours ago</span>
                                                    <div className="userabout">
                                                        <span>About</span>
                                                        <p>
                                                            I love reading, traveling and discovering new things.
                                                            You need to be happy in life.
                                                        </p>
                                                        <ul>
                                                            <li>
                                                                <span>Phone:</span> +123976980
                                                            </li>
                                                            <li>
                                                                <span>Website:</span>{" "}
                                                                <a href="#" title="">
                                                                    www.abc.com
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <span>Email:</span>{" "}
                                                                <a
                                                                    href="http://wpkixx.com/cdn-cgi/l/email-protection"
                                                                    className="__cf_email__"
                                                                    data-cfemail="8efdefe3fee2ebcee9e3efe7e2a0ede1e3"
                                                                >
                                                                    [email&nbsp;protected]
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <span>Phone:</span> Ontario, Canada
                                                            </li>
                                                        </ul>
                                                        <div className="media">
                                                            <span>Media</span>
                                                            <ul
                                                                className="ps-container ps-theme-default"
                                                                data-ps-id="800c0c94-ef93-3cd9-8590-7ee4d110ba11"
                                                            >
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user1.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user2.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user3.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user4.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user5.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user6.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img src="images/resources/admin2.jpg" alt="" />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user1.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user4.jpg"
                                                                        alt=""
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="images/resources/audio-user3.jpg"
                                                                        alt=""
                                                                    />
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
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Chat;