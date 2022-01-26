import React from "react";
import { Link } from "react-router-dom";
//data menu
import { menu } from "../../data/static/menu";
import "./menu.scss";

export default function Menu() {
  return (
    <div>
      <table className="parent-items d-block w-100 position-relative h-100">
        <tbody className="w-100 d-block">
          {menu &&
            menu.map((item) => (
              <tr key={item.id} className="w-100 d-block">
                <Link to={"/category/" + item.id} className="nav-link">
                  <td>
                    <i className={item.classIcon} />
                  </td>
                  <td>{item.itemName}</td>
                </Link>
                {item.childItems && (
                  <table className="child-items w-2 position-absolute w-100 h-100  p-2">
                    <tbody>
                      {item.childItems.map((childItem, index) => {
                        return (
                          <tr key={index}>
                            <td>
                              <Link to={childItem.link} className="nav-link">
                                {childItem.title}
                              </Link>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                )}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
