import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import "./Table.css";

// export const Table = () => {

//   return (
//     <div className="table-wrapper">
//       <Table className="table">
//         <thead>
//           <tr>
//             <th>Page</th>
//             <th className="expand">Description</th>
//             <th>Status</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>Home</td>
//             <td>This is the main page</td>
//             <td>
//               <span className="label label-live">Live</span>
//             </td>
//             <td>
//               <span className="actions">
//                 <BsFillTrashFill className="delete-btn" />
//                 <BsFillPencilFill />
//               </span>
//             </td>
//           </tr>

//           <tr>
//             <td>Page 2</td>
//             <td>This is the second page</td>
//             <td>
//               <span className="label label-draft">Draft</span>
//             </td>
//             <td>
//               <span className="actions">
//                 <BsFillTrashFill className="delete-btn" />
//                 <BsFillPencilFill />
//               </span>
//             </td>
//           </tr>
//           <tr>
//             <td>Page 3</td>
//             <td>This is the third page</td>
//             <td>
//               <span className="label label-error">Draft</span>
//             </td>
//             <td>
//               <span className="actions">
//                 <BsFillTrashFill className="delete-btn" />
//                 <BsFillPencilFill />
//               </span>
//             </td>
//           </tr>
//         </tbody>
//       </Table>
//     </div>
//   );
// };

const Table = ({ rows }) => {
  return (
    <table className="table">
      <thead>
        <tr>
            <th>PAGE</th>
            <th>DESCRIPTION</th>
            <th>STATUS</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            <td>{row.page}</td>
            <td>{row.description}</td>
            <td>{row.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
