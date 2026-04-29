/**
 * Yearly Goal Master - Backend
 * Developed with Tesla Style Aesthetic
 */

function doGet() {
  return HtmlService.createTemplateFromFile('index')
    .evaluate()
    .setTitle('Yearly Goal Master | Premium Dashboard')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

/**
 * Thêm các file HTML con vào file chính
 */
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

/**
 * Lấy dữ liệu giả lập để test vận hành
 */
function getInitialData() {
  return {
    user: "TK - ANH TAY",
    currentStep: 1,
    // Bước 1: Đánh giá
    evaluation: [
      { goal: "Tăng trưởng doanh thu", owner: "Anh Tay", target: 100, actual: 85 },
      { goal: "Phát triển đội ngũ", owner: "HR Manager", target: 10, actual: 11 }
    ],
    // Bước 2: SSK
    ssk: {
      start: ["Triển khai AI vào quy trình", "Họp nhanh 15p mỗi sáng"],
      stop: ["Báo cáo thủ công bằng giấy", "Họp quá 2 tiếng"],
      keep: ["Văn hóa chia sẻ kiến thức", "Review KPI hàng tuần"]
    },
    // Bước 3: Dữ liệu kinh doanh
    businessData: {
      revenue: 5000000000,
      profit: 1200000000,
      cashflow: 800000000
    },
    // Bước 5: Kế hoạch 2026
    plan2026: [
      { goal: "Mở rộng thị trường miền Nam", priority: "Cao", kpi: "3 chi nhánh mới" },
      { goal: "Số hóa 100% quy trình", priority: "Trung bình", kpi: "ERP hoàn thiện" }
    ]
  };
}

/**
 * Hàm lấy thông tin trợ giúp chi tiết cho 8 bước
 */
function getHelpContent(stepIndex) {
  const helpData = {
    1: "Hướng dẫn Đánh giá: Xem lại mục tiêu đầu năm. Tính % hoàn thành = Thực tế / Mục tiêu.",
    2: "Bài tập SSK: START (Bắt đầu làm gì mới), STOP (Dừng làm gì không hiệu quả), KEEP (Tiếp tục phát huy gì).",
    3: "Dữ liệu kinh doanh: Nhập các chỉ số P&L và Dòng tiền quan trọng nhất.",
    4: "Đánh giá chiến lược: Trả lời các câu hỏi về vị thế thị trường và năng lực cốt lõi.",
    5: "Kế hoạch năm 2026: Thiết lập các 'Big Rock' cho năm tới.",
    6: "Roadmap: Phân bổ các cột mốc quan trọng vào 4 Quý.",
    7: "Kế hoạch Quý 1: Chi tiết hóa các hành động cho 3 tháng đầu năm.",
    8: "Kế hoạch Bộ phận: Phân rã mục tiêu Quý xuống từng Tuần/Tháng cho từng team."
  };
  return helpData[stepIndex] || "Thông tin đang được cập nhật...";
}
