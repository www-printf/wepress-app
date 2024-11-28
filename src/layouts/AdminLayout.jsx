import React from "react";
import { Sidebar } from "flowbite-react";
import { useLocation } from "react-router-dom";
import { ENDPOINTS } from "../routes/endPoints";
import ico_printer from "../assets/icons/icon_printer_black.png";

// Import icons
import { FaUser, FaPrint, FaChartBar, FaCog } from 'react-icons/fa';
import logo from "../assets/images/logo.png";

const AdminLayout = ({ children }) => {
    const location = useLocation();

    const customTheme = {
        root: {
            inner: "h-full overflow-y-auto overflow-x-hidden bg-white dark:bg-gray-800 px-3 py-4",
        },
    };

    return (
        <>
            <div className="flex">
                <div className="flex flex-1">
                    <div className="h-screen w-64 border-r border-gray-200">
                        <Sidebar theme={customTheme}>
                            <div className="mb-8 p-4">
                                <div className="flex items-center">
                                    <img src={ico_printer} alt="WePress Logo" className="h-8 w-8 mr-2" />
                                    <div>
                                        <div className="font-bold text-lg">WePress</div>
                                        <div className="text-sm text-gray-500">SPSO panel</div>
                                    </div>
                                </div>
                            </div>
                            <Sidebar.Items>
                                <Sidebar.ItemGroup>
                                    <Sidebar.Item
                                        href={ENDPOINTS.ADMIN.DASHBOARD}
                                        icon={FaChartBar}
                                        active={location.pathname === ENDPOINTS.ADMIN.DASHBOARD}
                                        className="py-3"
                                    >
                                        <span>Bảng điều khiển</span>
                                    </Sidebar.Item>

                                    <Sidebar.Item
                                        href={ENDPOINTS.ADMIN.PRINTERS}
                                        icon={FaPrint}
                                        active={location.pathname === ENDPOINTS.ADMIN.PRINTERS}
                                        className="py-3"
                                    >
                                        <span>Các máy in</span>
                                    </Sidebar.Item>

                                    <Sidebar.Item
                                        href={ENDPOINTS.ADMIN.USERS}
                                        icon={FaUser}
                                        active={location.pathname === ENDPOINTS.ADMIN.USERS}
                                        className="py-3"
                                    >
                                        <span>Người dùng</span>
                                    </Sidebar.Item>

                                    <Sidebar.Item
                                        href={ENDPOINTS.ADMIN.REVENUE}
                                        icon={FaChartBar}
                                        active={location.pathname === ENDPOINTS.ADMIN.REVENUE}
                                        className="py-3"
                                    >
                                        <span>Doanh thu</span>
                                    </Sidebar.Item>

                                    <Sidebar.Item
                                        href={ENDPOINTS.ADMIN.SETTINGS}
                                        icon={FaCog}
                                        active={location.pathname === ENDPOINTS.ADMIN.SETTINGS}
                                        className="py-3"
                                    >
                                        <span>Tùy chỉnh hệ thống</span>
                                    </Sidebar.Item>
                                </Sidebar.ItemGroup>
                            </Sidebar.Items>
                        </Sidebar>
                    </div>

                    <div className="flex-1 bg-[#e5e5e5] p-6">{children}</div>
                </div>
            </div>
        </>
    );
};

export default AdminLayout;