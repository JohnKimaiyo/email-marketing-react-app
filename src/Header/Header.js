import React from "react";
import "./Header.css";
export default function Header() {
  return (
    <div>
      <h2>Email List Analysis Business Requests</h2>

      <table>
        <tr>
          <th>Job Title</th>
          <th>Business Request</th>
          <th>User Value</th>
          <th>Acceptance Criteria</th>
        </tr>
        <tr>
          <td>Sales Manager</td>
          <td>To get a dashboard overview of Sales</td>
          <td>Can follow better which customers and products sells the best</td>
          <td></td>
        </tr>
        <tr>
          <td>Sales Representative</td>
          <td>A detailed overview of Sales per Category of Products</td>
          <td>
            Can follow up my customers that buys the most and who we can sell
            ore to
          </td>
          <td>
            A Power BI dashboard which allows me to filter data for each Product
          </td>
        </tr>
        <tr>
          <td>Sales Representative</td>
          <td>A detailed overview of Sales per City</td>
          <td>
            Can follow up my slaes agents which city buys the most and who we
            can sell ore to
          </td>
          <td>
            A Power BI dashboard which allows me to filter data for each City
          </td>
        </tr>
        <tr>
          <td>Sales Representative</td>
          <td>A detailed overview of Sales as per gender</td>
          <td>
            Can follow up my Department which Gender based prodcuts sells the
            most
          </td>

          <td>
            A Power BI dashboard which allows me to filter data for each Gender
          </td>
        </tr>
        <tr>
          <td>Sales Representative</td>
          <td>A detailed overview of Sales per Category</td>
          <td>Can follow up my Department that sells the most</td>

          <td>
            A Power BI dashboard which allows me to filter data for each
            Category
          </td>
        </tr>
      </table>

      <h2>View the Dashboard in this Section</h2>
      <table>
        <tr>
          <th>Page Routes </th>
          <th>Description of the Pages</th>
          <th>URL Links</th>
        </tr>
        <tr>
          <td>PDF Dashboard Data</td>
          <td>PDF file containing the Sales Visualised Data</td>

          <td>
            <a
              href="https://github.com/JohnKimaiyo/email-marketing-react-app/blob/main/src/Power%20BI/Email%20List%20Dashboard.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View the Dashboard Here
            </a>
          </td>
        </tr>

        <tr>
          <td>Googlesheet Dashboard Data</td>
          <td> Visualised Data in Googlesheet</td>

          <td>
            <a href="" target="_blank" rel="noopener noreferrer">
              View the Dashboard Here
            </a>
          </td>
        </tr>
        <tr>
          <td>Excel Dashboard </td>
          <td>Check my Excel Sales Dashboard</td>
          <td>
            <a href="" target="_blank" rel="noopener noreferrer">
              Click here to view the excel dashboard data{" "}
            </a>
          </td>
        </tr>
        <tr>
          <td>Power BI File </td>
          <td>Check out my Power BI Sales Insights Dashbord File</td>
          <td>
            <a
              href="https://github.com/JohnKimaiyo/email-marketing-react-app/blob/main/src/Power%20BI/Email%20List%20Dashboard.pbix"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here to download Power BI File
            </a>
          </td>
        </tr>
        <tr>
          <td>SQL Scripts</td>
          <td>Checkout sql statement to clean up the data</td>
          <td>
            <a
              href="https://github.com/JohnKimaiyo/email-marketing-react-app/blob/main/src/SQL%20Scripts/dbo.sql"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here to view the SQL scripts
            </a>
          </td>
        </tr>
        <tr>
          <td> Email  List Source Files </td>
          <td> Email List Kaggle Dataset</td>
          <td>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here to down load the source files from kaggle
            </a>
          </td>
        </tr>
        <tr>
          <td> Email List JSON Files </td>
          <td> Email List JSON Dataset</td>
          <td>
            <a
              href="https://github.com/JohnKimaiyo/email-marketing-react-app/blob/main/src/Source%20Files/email.json"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here to down load the JSON file
            </a>
          </td>
        </tr>
        <tr>
          <td>Create JSON Files </td>
          <td>Check out my Excel to JSON Converter app</td>
          <td>
            <a
              href="https://excel-to-json-javascript-converter.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here to convert Excel data to JSON Data
            </a>
          </td>
        </tr>
      </table>
    </div>
  );
}