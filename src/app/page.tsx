"use client"
import * as React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export default function Home() {

  type MyDataObject = {
    text: string;
    id: string;
    dump: string;
    url: string;
  };

  const data: MyDataObject[] = [
    {
      text: "AP reported in all formats from tornado-stricken regionsMarch 8, 2012 When the first.. AP reported in all formats from tornado-stricken regionsMarch 8, 2012 When the first..AP reported in all formats from tornado-stricken regionsMarch 8, 2012 When the first",
      id: "curn:uuid:d66bc6fe-8477-4adf-b430-a74fb4f7e0bd",
      dump: "CC-MAIN",
      url: "http://%20jwashington@ap.org/Content/Press-Release/2012/How-AP-reported-in-all-formats-from-tornado-stricken-regions"
    },
    {
      text: "AP reported in all formats from tornado-stricken regionsMarch 8, 2012 When the first.. AP reported in all formats from tornado-stricken regionsMarch 8, 2012 When the first..AP reported in all formats from tornado-stricken regionsMarch 8, 2012 When the first",
      id: "urn:uuid:883e14c3-dc2e-43d6-b75d-b1c52a8efa0c",
      dump: "CC-MAIN",
      url: "http://1000awesomethings.com/2012/09/24/934-adrenaline/"
    },
    {
      text: "AP reported in all formats from tornado-stricken regionsMarch 8, 2012 When the first.. AP reported in all formats from tornado-stricken regionsMarch 8, 2012 When the first..AP reported in all formats from tornado-stricken regionsMarch 8, 2012 When the first",
      id: "urn:uuid:ac1bbfff-9519-4967-9c64-e038e2b2c110",
      dump: "CC-MAIN",
      url: "http://1027kord.com/car-wash-for-clara/"
    },
    {
      text: "AP reported in all formats from tornado-stricken regionsMarch 8, 2012 When the first.. AP reported in all formats from tornado-stricken regionsMarch 8, 2012 When the first..AP reported in all formats from tornado-stricken regionsMarch 8, 2012 When the first",
      id: "urn:uuid:c1445c58-b111-4c4e-badd-97aea79e9bfa",
      dump: "CC-MAIN",
      url: "http://1075zoofm.com/listeners-get-sky-high-view-of-missoula-from-hot-air-balloons/"
    },
    {
      text: "AP reported in all formats from tornado-stricken regionsMarch 8, 2012 When the first.. AP reported in all formats from tornado-stricken regionsMarch 8, 2012 When the first..AP reported in all formats from tornado-stricken regionsMarch 8, 2012 When the first",
      id: "urn:uuid:e582917d-6944-4468-9573-7e4c3f4aa2c1",
      dump: "CC-MAIN",
      url: "http://1105gov.infoevents.com/enterprisearchitecture/event/public/MyBriefcasef671.html?..."
    },
    {
      text: "AP reported in all formats from tornado-stricken regionsMarch 8, 2012 When the first.. AP reported in all formats from tornado-stricken regionsMarch 8, 2012 When the first..AP reported in all formats from tornado-stricken regionsMarch 8, 2012 When the first.",
      id: "urn:uuid:6bfca26f-ea67-41ba-b995-8897792f9339",
      dump: "CC-MAIN",
      url: "http://12vspotlight.com/"
    },
    {
      text: "AP reported in all formats from tornado-stricken regionsMarch 8, 2012 When the first.. AP reported in all formats from tornado-stricken regionsMarch 8, 2012 When the first..AP reported in all formats from tornado-stricken regionsMarch 8, 2012 When the first.",
      id: "urn:uuid:6bfca26f-ea67-41ba-b995-8897792f9339",
      dump: "CC-MAIN",
      url: "http://12vspotlight.com/"
    },
    {
      text: "AP reported in all formats from tornado-stricken regionsMarch 8, 2012 When the first.. AP reported in all formats from tornado-stricken regionsMarch 8, 2012 When the first..AP reported in all formats from tornado-stricken regionsMarch 8, 2012 When the first.",
      id: "urn:uuid:6bfca26f-ea67-41ba-b995-8897792f9339",
      dump: "CC-MAIN",
      url: "http://12vspotlight.com/"
    },
    {
      text: "AP reported in all formats from tornado-stricken regionsMarch 8, 2012 When the first.. AP reported in all formats from tornado-stricken regionsMarch 8, 2012 When the first..AP reported in all formats from tornado-stricken regionsMarch 8, 2012 When the first.",
      id: "urn:uuid:6bfca26f-ea67-41ba-b995-8897792f9339",
      dump: "CC-MAIN",
      url: "http://12vspotlight.com/"
    },
    {
      text: "AP reported in all formats from tornado-stricken regionsMarch 8, 2012 When the first.. AP reported in all formats from tornado-stricken regionsMarch 8, 2012 When the first..AP reported in all formats from tornado-stricken regionsMarch 8, 2012 When the first.",
      id: "urn:uuid:6bfca26f-ea67-41ba-b995-8897792f9339",
      dump: "CC-MAIN",
      url: "http://12vspotlight.com/"
    },
    {
      text: "AP reported in all formats from tornado-stricken regionsMarch 8, 2012 When the first.. AP reported in all formats from tornado-stricken regionsMarch 8, 2012 When the first..AP reported in all formats from tornado-stricken regionsMarch 8, 2012 When the first.",
      id: "urn:uuid:6bfca26f-ea67-41ba-b995-8897792f9339",
      dump: "CC-MAIN",
      url: "http://12vspotlight.com/"
    },
    {
      text: "AP reported in all formats from tornado-stricken regionsMarch 8, 2012 When the first.. AP reported in all formats from tornado-stricken regionsMarch 8, 2012 When the first..AP reported in all formats from tornado-stricken regionsMarch 8, 2012 When the first.",
      id: "urn:uuid:6bfca26f-ea67-41ba-b995-8897792f9339",
      dump: "CC-MAIN",
      url: "http://12vspotlight.com/"
    },
    {
      text: "AP reported in all formats from tornado-stricken regionsMarch 8, 2012 When the first.. AP reported in all formats from tornado-stricken regionsMarch 8, 2012 When the first..AP reported in all formats from tornado-stricken regionsMarch 8, 2012 When the first.",
      id: "urn:uuid:6bfca26f-ea67-41ba-b995-8897792f9339",
      dump: "CC-MAIN",
      url: "http://12vspotlight.com/"
    },
    {
      text: "AP reported in all formats from tornado-stricken regionsMarch 8, 2012 When the first.. AP reported in all formats from tornado-stricken regionsMarch 8, 2012 When the first..AP reported in all formats from tornado-stricken regionsMarch 8, 2012 When the first.",
      id: "urn:uuid:6bfca26f-ea67-41ba-b995-8897792f9339",
      dump: "CC-MAIN",
      url: "http://12vspotlight.com/"
    },
    {
      text: "AP reported in all formats from tornado-stricken regionsMarch 8, 2012 When the first.. AP reported in all formats from tornado-stricken regionsMarch 8, 2012 When the first..AP reported in all formats from tornado-stricken regionsMarch 8, 2012 When the first.",
      id: "urn:uuid:6bfca26f-ea67-41ba-b995-8897792f9339",
      dump: "CC-MAIN",
      url: "http://12vspotlight.com/"
    },
    {
      text: "AP reported in all formats from tornado-stricken regionsMarch 8, 2012 When the first.. AP reported in all formats from tornado-stricken regionsMarch 8, 2012 When the first..AP reported in all formats from tornado-stricken regionsMarch 8, 2012 When the first.",
      id: "urn:uuid:6bfca26f-ea67-41ba-b995-8897792f9339",
      dump: "CC-MAIN",
      url: "http://12vspotlight.com/"
    },
    {
      text: "AP reported in all formats from tornado-stricken regionsMarch 8, 2012 When the first.. AP reported in all formats from tornado-stricken regionsMarch 8, 2012 When the first..AP reported in all formats from tornado-stricken regionsMarch 8, 2012 When the first.",
      id: "urn:uuid:6bfca26f-ea67-41ba-b995-8897792f9339",
      dump: "CC-MAIN",
      url: "http://12vspotlight.com/"
    },
    {
      text: "AP reported in all formats from tornado-stricken regionsMarch 8, 2012 When the first.. AP reported in all formats from tornado-stricken regionsMarch 8, 2012 When the first..AP reported in all formats from tornado-stricken regionsMarch 8, 2012 When the first.",
      id: "urn:uuid:6bfca26f-ea67-41ba-b995-8897792f9339",
      dump: "CC-MAIN",
      url: "http://12vspotlight.com/"
    },
    {
      text: "AP reported in all formats from tornado-stricken regionsMarch 8, 2012 When the first.. AP reported in all formats from tornado-stricken regionsMarch 8, 2012 When the first..AP reported in all formats from tornado-stricken regionsMarch 8, 2012 When the first.",
      id: "urn:uuid:6bfca26f-ea67-41ba-b995-8897792f9339",
      dump: "CC-MAIN",
      url: "http://12vspotlight.com/"
    },
  ];

  const newData = data.map((obj, index) => ({
    ...obj,
    sr: index + 1
  }));

  const [expandedRows, setExpandedRows] = React.useState<{ [key: number]: boolean }>({});

  const [currentPage, setCurrentPage] = React.useState<number>(1)
  const recordPerPage = 5
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = (currentPage - 1) * recordPerPage;
  const records = newData.slice(firstIndex, lastIndex);

  const pages = Math.ceil(data.length / recordPerPage);

  const pageNumbers = Array.from({ length: pages }, (_, i) => i + 1);

  const toggleExpandRow = (index: number) => {
    setExpandedRows((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const truncateText = (text: string, wordLimit: number) => {
    const words = text.split(' ');
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(' ') + '...';
  };

  const prevPage = () => {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1);
    }
  }

  const changeCurrentPage = (id: number) => {
    setCurrentPage(id)
  }

  const nextPage = () => {
    if (currentPage !== lastIndex) {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-2">
      <table className="w-full table-auto my-4">
        <thead>
          <tr className="text-left">
            <th colSpan={2} className="py-2 px-1">
              Subset (99) <br /> <span className="text-slate-400 text-sm">default</span>
            </th>
            <th colSpan={2} className="py-2 px-1">
              Split (1) <br /> <span className="text-slate-400 text-sm">train</span>
            </th>
          </tr>
          <tr className="text-left text-sm">
            <th className="px-2 font-semibold">
              text <br /> <span className="text-slate-400 text-sm font-normal">default</span>
            </th>
            <th className="px-2 font-semibold">
              id <br /> <span className="text-slate-400 text-sm font-normal">default</span>
            </th>
            <th className="px-2 font-semibold">
              dump <br /> <span className="text-slate-400 text-sm font-normal">default</span>
            </th>
            <th className="px-2 font-semibold">
              url <br /> <span className="text-slate-400 text-sm font-normal">default</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {records.map((entry: MyDataObject, index: number) => {
            const { text, id, dump, url, sr } = entry;
            const isExpanded = !!expandedRows[index];
            return (
              <tr key={index} className={index % 2 ? "bg-gray-100 text-sm" : "text-sm"}>
                <td>
                  {sr}. {" "}
                  {isExpanded ? text : truncateText(text, 10)}{' '}
                  {text.split(' ').length > 10 && (
                    <button
                      onClick={() => toggleExpandRow(index)}
                      className="text-blue-500 underline"
                    >
                      {isExpanded ? 'less' : 'more'}
                    </button>
                  )}
                </td>
                <td>{id}</td>
                <td>{dump}</td>
                <td>{url}</td>
              </tr>
            );
          })}
        </tbody>
      </table>


      <Pagination className="relative bottom-36" >
        <PaginationPrevious onClick={prevPage} />
        <PaginationContent>
          {pageNumbers.map((num) => (
            <PaginationItem key={num}>
              <PaginationLink
                href="#"
                onClick={() => changeCurrentPage(num)}

              >
                {num}
              </PaginationLink>
            </PaginationItem>
          ))}
          {pageNumbers.length > 5 && (
            <PaginationEllipsis />
          )}
        </PaginationContent>
        <PaginationNext onClick={nextPage} />
      </Pagination>

    </main>
  );
}
