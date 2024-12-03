import { Classroom } from "@/api/types/queries";
import { Table } from "@chakra-ui/react";
import { ReactNode, useMemo } from "react";
import {
  flexRender,
  getCoreRowModel,
  ColumnDef,
  useReactTable,
} from "@tanstack/react-table";
import { Link } from "react-router-dom";

type ClassroomsTableProps = {
  classrooms: Classroom[];
};

const ClassroomsTable = ({ classrooms }: ClassroomsTableProps) => {
  const columns = useMemo<ColumnDef<Classroom>[]>(() => {
    return [
      {
        header: "Classroom Name",
        accessorKey: "name",
        cell: ({ row, getValue }) => (
          <Link to={`/classroom/${row.original.id}`}>
            {getValue() as ReactNode}
          </Link>
        ),
      },
      {
        header: "Progress",
        id: "progress",
      },
      {
        header: "Last Updated",
        accessorKey: "lastUpdated",
      },
    ];
  }, []);

  const table = useReactTable({
    columns,
    data: classrooms,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Table.Root>
      <Table.Header>
        {table.getHeaderGroups().map((headerGroup) => (
          <Table.Row>
            {headerGroup.headers.map((header) => (
              <Table.ColumnHeader>
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </Table.ColumnHeader>
            ))}
          </Table.Row>
        ))}
      </Table.Header>
      <Table.Body>
        {table.getRowModel().rows.map((row) => {
          return (
            <Table.Row>
              {row.getVisibleCells().map((cell) => {
                return (
                  <Table.Cell>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Table.Cell>
                );
              })}
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table.Root>
  );
};

export default ClassroomsTable;
