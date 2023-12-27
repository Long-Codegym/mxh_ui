const HomeChat = () =>{
    return(
        <>
            <div className="dropdowns ps-container ps-theme-default ps-active-y active" data-ps-id="78938bf8-d752-efa6-4227-51ad4d0356c7">
  <span>
    5 New Messages{" "}
      <a href="#" title="">
      Mark all as read
    </a>
  </span>
                <ul className="drops-menu">
                    <li>
                        <a className="show-mesg" href="#" title="">
                            <figure>
                                <img src="images/resources/thumb-1.jpg" alt="" />
                                <span className="status f-online" />
                            </figure>
                            <div className="mesg-meta">
                                <h6>sarah Loren</h6>
                                <span>
            <i className="ti-check" /> Hi, how r u dear ...?
          </span>
                                <i>2 min ago</i>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a className="show-mesg" href="#" title="">
                            <figure>
                                <img src="images/resources/thumb-2.jpg" alt="" />
                                <span className="status f-offline" />
                            </figure>
                            <div className="mesg-meta">
                                <h6>Jhon doe</h6>
                                <span>
            <i className="ti-check" /> We’ll have to check that at the office
            and see if the client is on board with
          </span>
                                <i>2 min ago</i>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a className="show-mesg" href="#" title="">
                            <figure>
                                <img src="images/resources/thumb-3.jpg" alt="" />
                                <span className="status f-online" />
                            </figure>
                            <div className="mesg-meta">
                                <h6>Andrew</h6>
                                <span>
            {" "}
                                    <i className="fa fa-paperclip" />
            Hi Jack's! It’s Diana, I just wanted to let you know that we have to
            reschedule..
          </span>
                                <i>2 min ago</i>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a className="show-mesg" href="#" title="">
                            <figure>
                                <img src="images/resources/thumb-4.jpg" alt="" />
                                <span className="status f-offline" />
                            </figure>
                            <div className="mesg-meta">
                                <h6>Tom cruse</h6>
                                <span>
            <i className="ti-check" /> Great, I’ll see you tomorrow!.
          </span>
                                <i>2 min ago</i>
                            </div>
                        </a>
                        <span className="tag">New</span>
                    </li>
                    <li>
                        <a className="show-mesg" href="#" title="">
                            <figure>
                                <img src="images/resources/thumb-5.jpg" alt="" />
                                <span className="status f-away" />
                            </figure>
                            <div className="mesg-meta">
                                <h6>Amy</h6>
                                <span>
            <i className="fa fa-paperclip" /> Sed ut perspiciatis unde omnis
            iste natus error sit{" "}
          </span>
                                <i>2 min ago</i>
                            </div>
                        </a>
                        <span className="tag">New</span>
                    </li>
                </ul>
                <a href="chat-messenger.html" title="" className="more-mesg">
                    View All
                </a>
                <div className="ps-scrollbar-x-rail" style={{ left: 0, bottom: 0 }}>
                    <div
                        className="ps-scrollbar-x"
                        tabIndex={0}
                        style={{ left: 0, width: 0 }}
                    />
                </div>
                <div
                    className="ps-scrollbar-y-rail"
                    style={{ top: 0, height: 340, right: 0 }}
                >
                    <div
                        className="ps-scrollbar-y"
                        tabIndex={0}
                        style={{ top: 0, height: 323 }}
                    />
                </div>
            </div>

        </>
    )
}
export default HomeChat;