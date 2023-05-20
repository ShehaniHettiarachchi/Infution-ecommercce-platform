import React from "react";

const EditDelivery = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td></td>
      <td>
        <input
          type="text"
          name="customerName"
          className="form-control"
          value={editFormData.customerName}
          placeholder="Enter Customer Name"
          required="requird"
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="orderID"
          className="form-control"
          value={editFormData.orderID}
          placeholder="Enter Order ID"
          required="requird"
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="customerContactNumber"
          className="form-control"
          value={editFormData.customerContactNumber}
          placeholder="Enter Customer Contact Number"
          required
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="deliveryAddress"
          className="form-control"
          value={editFormData.deliveryAddress}
          placeholder="Enter Delivery Address"
          required
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <select
          name="noofOrders"
          className="form-select"
          value={editFormData.noofOrders}
          onChange={handleEditFormChange}
        >
          <option>Choose...</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </select>
      </td>
      <td>
        <select
          name="driverName"
          className="form-select"
          value={editFormData.driverName}
          onChange={handleEditFormChange}
        >
          <option>Choose...</option>
          <option>Kumara Silva</option>
          <option>Tharindu Dilshan</option>
          <option>Kasun Chamara</option>
          <option>Sudeepa Kumara</option>
          <option>Mohammed Amir</option>
        </select>
      </td>
      <td>
        <select
          name="driverContactNumber"
          className="form-select"
          value={editFormData.driverContactNumber}
          onChange={handleEditFormChange}
        >
          <option>Choose...</option>
          <option>Kumara-0771221220</option>
          <option>Tharindu-0771331331</option>
          <option>Kasun-0771441442</option>
          <option>Sudeepa-0771551553</option>
          <option>Amir-0771661664</option>
        </select>
      </td>
      <td></td>
      <td>
        <button type="submit" className="btn btn-outline-success">
          Save
        </button>
        <button
          type="button"
          onClick={handleCancelClick}
          className="btn btn-outline-danger"
        >
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditDelivery;
