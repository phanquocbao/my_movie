export const menuItems = [
    {
        url: '/',
        title :'Trang Chủ',
    },
    {
        url: 'the-loai',
        title : 'Thể Loại',
        submenu: [
        {
            url:"huyen-huyen",
            title: "Huyền Huyễn",
        },
        {
            url:"xuyen-khong",
            title: "Xuyên không",
        },
        {
            url:"trung-sinh",
            title: "Trùng sinh",
        },
        {
            title: "Tiên hiệp",
            url:"tien-hiep",
        },
        ]
    },
    {
        url: 'phim-le',
        title: 'Phim Lẻ'
    },
    {   url: 'phim-dang-chieu',
        title: 'Phim Đang Chiếu'
    },
    {   url: 'lich-chieu',
        title: 'Lịch Chiếu'
    },
    {   url: 'phim-hoan-thanh',
        title: 'Phim Hoàn Thành'
    },
    {
        url: 'phim-sap-chieu',
        title: 'Phim Sắp Chiếu',
    }];

