import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import icon_collapse from "../assets/icons/icon_collapse.png";
import icon_expand from "../assets/icons/icon_expand.png";
import icon_add from "../assets/icons/icon_add.png";
import icon_share from "../assets/icons/icon_share.png";
import icon_people from "../assets/icons/icon_people.png";
import { Sidebar } from "flowbite-react";
import { useState } from "react";
import { HiChartPie, HiViewBoards, HiInbox, HiUser } from "react-icons/hi";
import { ENDPOINTS } from "../routes/endPoints";
import { Link, useLocation } from "react-router-dom";

const SidebarLayout = ({ children }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const location = useLocation();

    const customTheme = {
        root: {
            inner:
                "h-full overflow-y-auto overflow-x-hidden bg-white dark:bg-gray-800 px-3 py-4 border-[#cfd2d7] border-2",
        },
    };

    return (
        <>
            <Header />
            <div className="flex">
                <div className="flex flex-1">
                    <div className="h-full">
                        <Sidebar
                            aria-label="Sidebar with multi-level dropdown example"
                            collapsed={isCollapsed}
                            theme={customTheme}
                        >
                            <Sidebar.Items>
                                <Sidebar.ItemGroup>
                                    <button
                                        onClick={() => setIsCollapsed(!isCollapsed)}
                                        className="w-full flex justify-end items-center text-gray-900 hover:bg-gray-100"
                                    >
                                        <div className="text-xl">
                                            {isCollapsed ? (
                                                <img src={icon_expand} alt="icon_expand" />
                                            ) : (
                                                <img src={icon_collapse} alt="icon_collapse" />
                                            )}
                                        </div>
                                    </button>

                                    <Sidebar.Item
                                        href="#"
                                        icon={() => <img src={icon_add} alt="icon_add" />}
                                        className="my-7 justify-start"
                                    >
                                        <span>Thêm mới</span>
                                    </Sidebar.Item>

                                    <Sidebar.Item
                                        href={ENDPOINTS.USER.LIBRARY}
                                        icon={HiInbox}
                                        active={location.pathname === ENDPOINTS.USER.LIBRARY}
                                        className="justify-start"
                                    >
                                        <span>Thư viện Wepress</span>
                                    </Sidebar.Item>

                                    <Sidebar.Item
                                        href={ENDPOINTS.USER.SHARED_WITH_ME}
                                        icon={() => <img src={icon_share} alt="icon_share" />}
                                        active={location.pathname === ENDPOINTS.USER.SHARED_WITH_ME}
                                        className="justify-start"
                                    >
                                        <span>Được chia sẻ với tôi</span>
                                    </Sidebar.Item>

                                    <Sidebar.Item
                                        href={ENDPOINTS.USER.MY_DOCUMENTS}
                                        icon={() => <img src={icon_people} alt="icon_people" />}
                                        active={location.pathname === ENDPOINTS.USER.MY_DOCUMENTS}
                                        className="justify-start"
                                    >
                                        <span>Tài liệu của tôi</span>
                                    </Sidebar.Item>
                                </Sidebar.ItemGroup>
                            </Sidebar.Items>
                        </Sidebar>
                    </div>

                    <div className="flex-1 bg-[#e5e5e5]">{children}</div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default SidebarLayout;
