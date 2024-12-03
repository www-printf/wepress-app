import React, { useEffect } from "react";
import { Sidebar } from "flowbite-react";
import { useLocation, useNavigate } from "react-router-dom";
import { ENDPOINTS } from "../routes/endPoints";
import ico_printer from "../assets/icons/icon_printer_black.png";
import { toast } from "react-toastify";
import request from "../utils/request";
import { useAuth } from "../hooks/useAuth";
// Import icons
import { FaUser, FaPrint, FaChartBar, FaCog } from 'react-icons/fa';
import logo from "../assets/images/logo.png";
import {CiLogout} from "react-icons/ci";

const AdminLayout = ({ children }) => {
    const { logout } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserProfile = async () => {
            const response = await request.get('/auth/me');

            if (!["spso"].includes(response.role)) {
                toast.warning("Bạn không có quyền truy cập vào trang này!");
                navigate(ENDPOINTS.INDEX);
            }
        };

        fetchUserProfile();
    }, [navigate]);

    const customTheme = {
        root: {
            inner: "h-full overflow-y-auto overflow-x-hidden bg-white dark:bg-gray-800 px-3 py-4",
        },
    };

    return (
        <>
            <div className="flex">
                <div className="flex flex-1">
                    <div className="h-screen w-64 border-r border-gray-200 sticky top-0">
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
                                        href={ENDPOINTS.ADMIN.MONITOR_USER}
                                        icon={FaUser}
                                        active={location.pathname === ENDPOINTS.ADMIN.MONITOR_USER}
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
                                        href={ENDPOINTS.ADMIN.CONFIGSYSTEM}
                                        icon={FaCog}
                                        active={logout}
                                        className="py-3"
                                    >
                                        <span>Tùy chỉnh hệ thống</span>
                                    </Sidebar.Item>

                                    <Sidebar.Item
                                        href={''}
                                        icon={CiLogout}
                                        active={''}
                                        className="py-3 absolute bottom-0"
                                        onClick={logout}
                                    >
                                        <span>Đăng xuất</span>
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
