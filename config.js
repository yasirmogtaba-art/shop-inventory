"use strict";
/* Shop Inventory - local demo mode (no backend).
   Replace LOCAL_USERS and the storage layer with a real backend before production use. */
const LOCAL_USERS = [
  { id: "admin-1", email: "admin@example.com", password: "admin123", role: "admin", name: "مدير النظام", active: true },
  { id: "employee-1", email: "employee@example.com", password: "emp123", role: "employee", name: "الموظف", active: true }
];
const STORAGE = {
  session: "shop_inventory_session_v4",
  products: "shop_inventory_products_v4",
  tx: "shop_inventory_tx_v4"
};
