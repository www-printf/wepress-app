import logo from "../../../assets/icons/icon_Logo_white.svg";
import printerImage from "../../../assets/images/printer_img3.png";
import needs from "../../../assets/icons/icon_needs.svg";
import efficency from "../../../assets/icons/icon_efficency.svg";
import safety from "../../../assets/icons/icon_safe-and-stable.svg";

const AboutServices = () => {
  const services = [
    {
      icon: needs,
      title: "Phù hợp với nhu cầu của bạn",
      description:
        "Trọng tâm của dịch vụ web máy in của chúng tôi là sự hiểu biết sâu sắc về các yêu cầu riêng biệt của khách hàng. Chúng tôi làm việc chặt chẽ với bạn để tạo ra các giải pháp tùy chỉnh giải quyết các thách thức cụ thể của bạn.",
    },
    {
      icon: efficency,
      title: "Giải pháp in ấn hiệu quả",
      description:
        "Khai thác toàn bộ tiềm năng đội máy in của bạn bằng các công cụ quản lý thông minh dựa trên web của chúng tôi. Từ bảo trì tự động đến giám sát thời gian thực, các dịch vụ của chúng tôi đảm bảo cơ sở hạ tầng in ấn của bạn hoạt động ở hiệu suất cao nhất.",
    },
    {
      icon: safety,
      title: "An toàn và đáng tin cậy",
      description:
        "Hãy tin tưởng chúng tôi để bảo vệ các tài liệu và dữ liệu nhạy cảm của bạn. Các dịch vụ web máy in của chúng tôi kết hợp các giao thức bảo mật mạnh mẽ và các biện pháp dự phòng, giúp bạn an tâm tập trung vào các mục tiêu kinh doanh cốt lõi của mình.",
    },
  ];

  return (
    <div className="bg-gray-100 h-auto min-h-[1400px]">
      <div className="bg-blue-900 h-screen flex flex-row px-6 items-center justify-center">
        <div className="w-full flex flex-col justify-center items-center">
          <img src={logo} alt="" className="w-1/2" />
          <p className="w-3/4 text-center text-white text-2xl">
            Dịch vụ in tài liệu tiện lợi, nhanh chóng dành riêng cho sinh viên
            Đại học Bách Khoa TP.HCM!
          </p>
        </div>
        <div className="w-fit">
          <img src={printerImage} alt="" className="w-full drop-shadow-xl" />
        </div>
      </div>
      <div className="max-w-6xl mx-auto text-center p-6 h-screen ">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Về hệ thống của chúng tôi
        </h2>
        <p className="text-gray-600">
          Nâng cao hiệu quả học tập của bạn với dịch vụ in ấn tiên tiến của
          chúng tôi.{" "}
        </p>
        <p className="text-gray-600 mb-12">
          Đội ngũ chuyên gia của chúng tôi đã phát triển một bộ công cụ và công
          nghệ giúp hợp lý hóa quy trình in ấn.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center"
            >
              <img
                src={service.icon}
                alt={service.title}
                className="w-3/4 mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutServices;
