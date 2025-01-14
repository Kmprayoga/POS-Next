import { MenuItem } from "@/interFace/interFace";

export const menuData: MenuItem[] = [
    {
        label: "Dashboard",
        routeLink: "/",
        iconClas: "fal fa-home"

    },
    {
        label: "Product",
        routeLink: "#",
        iconClas: "fal fa-box-open",
        subItems: [
            {
                label: "Add Product",
                routeLink: "/product/addproduct",
            },
            {
                label: "Product List",
                routeLink: "/product/productlist",
            },
            {
                label: "Product Import",
                routeLink: "/product/importProduct",
            },
            {
                label: "Category",
                routeLink: "/product/productcategory",
            },
            {
                label: "Brand",
                routeLink: "/product/addbrand",
            },
            {
                label: "Unit/Value",
                routeLink: "/product/unit",
            },
            {
                label: "Generate Barcode",
                routeLink: "/product/generatebarcode",
            },
            {
                label: "Add Adjustment",
                routeLink: "/product/addadjustment",
            },
            {
                label: "Adjustment",
                routeLink: "/product/adjustment",
            },
        ],
    },
    {
        label: "Trading",
        routeLink: "#",
        iconClas: "fal fa-sack-dollar",
        subItems: [
            {
                label: "Sales",
                routeLink: "#",
                subSubItems: [
                    { label: "New Sales", routeLink: "/trading/sales/newsale" },
                    { label: "POS Sales", routeLink: "/trading/sales/possale" },
                    { label: "Sales List", routeLink: "/trading/sales/salelist" },
                    { label: "Sales Import", routeLink: "/trading/sales/importSale" },
                    { label: "Sales Returns", routeLink: "/trading/sales/salereturns" },
                ]
            },
            {
                label: "Purchase",
                routeLink: "#",
                subSubItems: [
                    { label: "Add Purchase", routeLink: "/trading/purchase/addpurchase" },
                    { label: "Manage Purchase", routeLink: "/trading/purchase/managepurchase" },
                    { label: "Purchase Import", routeLink: "/trading/purchase/importPurchase" },
                    { label: "Purchase Returns", routeLink: "/trading/purchase/purchasereturns" },
                ],
            },
            {
                label: "Invoice/Billing",
                routeLink: "#",
                subSubItems: [
                    { label: "Sale Invoice", routeLink: "/trading/invoice/saleinvoice" },
                    { label: "Sale List Invoice", routeLink: "/trading/invoice/saleslistinvoice" },
                    { label: "Import Sale List", routeLink: "/trading/invoice/importInvoice" },
                    { label: "Purchase Invoice", routeLink: "/trading/invoice/purchaseinvoice" },
                    { label: "Purchase List Invoice", routeLink: "/trading/invoice/purchaselistinvoice" },
                    { label: "Import Purchase Invoice", routeLink: "/trading/invoice/importPurchaseInvoice" },
                    { label: "Expense Invoice", routeLink: "/trading/invoice/expenseinvoice" },
                    { label: "Expense List Invoice", routeLink: "/trading/invoice/expenselistinvoice" },
                    { label: "Import Expence Invoice", routeLink: "/trading/invoice/importExpenseInvoice" },

                ],
            },
        ],
    },
    {
        label: "Expesne",
        routeLink: "#",
        iconClas: "fa-light fa-ballot",
        subItems: [
            {
                label: "Add Expense",
                routeLink: "/expesne/addexpense",
            },
            {
                label: "Expense List",
                routeLink: "/expesne/expenselist",
            },
            {
                label: "Expense Category",
                routeLink: "/expesne/expensecategory",
            },
            {
                label: "Payment Expense",
                routeLink: "/expesne/createpayment",
            },
        ],
    },
    {
        label: "People",
        routeLink: "#",
        iconClas: "fa-light fa-users",
        subItems: [
            {
                label: "Add Customer",
                routeLink: "/people/addcustomer",
            },
            {
                label: "Customer List",
                routeLink: "/people/customerlist",
            },
            {
                label: "Import Customer",
                routeLink: "/people/importCustomer",
            },
            {
                label: "Add Supplier",
                routeLink: "/people/addsupplier",
            },
            {
                label: "Supplier List",
                routeLink: "/people/supplierlist",
            },
            {
                label: "Import Supplier",
                routeLink: "/people/importSupplier",
            },
            {
                label: "Add Biller",
                routeLink: "/people/addbiller",
            },
            {
                label: "Biller List",
                routeLink: "/people/billerlist",
            },
            {
                label: "Import Biller",
                routeLink: "/people/importBiller",
            },
        ],
    },
    {
        label: "User Management",
        routeLink: "#",
        iconClas: "fa-light fa-user",
        subItems: [
            {
                label: "Add User",
                routeLink: "/client/adduser",
            },
            {
                label: "User List",
                routeLink: "/client/userlist",
            },
            {
                label: "Create Role",
                routeLink: "/client/createrole",
            },
        ],
    },
    {
        label: "Transfer",
        routeLink: "#",
        iconClas: "fa-light fa-tags",
        subItems: [
            {
                label: "Add Transfer",
                routeLink: "/transfer/addtransfer",
            },
            {
                label: "Import Transfer",
                routeLink: "/transfer/importTransfer",
            },
            {
                label: "Transfer List",
                routeLink: "/transfer/transferlist",
            },
        ],
    },
    {
        label: "Warehouse",
        routeLink: "#",
        iconClas: "fal fa-building",
        subItems: [
            {
                label: "Add Warehouse",
                routeLink: "/warehouse/addWarehouse",
            },
            {
                label: "Warehouse List",
                routeLink: "/warehouse/warehouselist",
            },
        ],
    },
    {
        label: "Reports",
        routeLink: "#",
        iconClas: "fa-light fa-shelves",
        subItems: [
            {
                label: "Sales Report",
                routeLink: "/report/salereport",
            },
            {
                label: "Purchase Report",
                routeLink: "/report/purchasereport",
            },
            {
                label: "Payment Report",
                routeLink: "/report/paymentreport",
            },
            {
                label: "Product Report",
                routeLink: "/report/productreport",
            },
            {
                label: "Stock Report",
                routeLink: "/report/stockreport",
            },
            {
                label: "Expense Report",
                routeLink: "/report/expensereport",
            },
            {
                label: "User Report",
                routeLink: "/report/userreport",
            },
            {
                label: "Customer Report",
                routeLink: "/report/customerreport",
            },
            {
                label: "Warehouse Report",
                routeLink: "/report/warehousereport",
            },
            {
                label: "Supplier Report",
                routeLink: "/report/supplierreport",
            },
            {
                label: "Discount Report",
                routeLink: "/report/discountreport",
            },
            {
                label: "Tax Report",
                routeLink: "/report/taxreport",
            },
            {
                label: "Shipping Charge",
                routeLink: "/report/shippingchargereport",
            },
        ],
    },
    {
        label: "Administrative Tools",
        routeLink: "/rolepermission",
        iconClas: "fa-sharp fa-light fa-gear"
    },
];