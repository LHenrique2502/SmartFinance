import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { transactionColumns } from "./_columms";
import AddTransactionButton from "../_components/add-transaction-button";

const TransactionsPage = async () => {
  const transactions = await db.transaction.findMany({});

  return (
    <div className="space-y-6 p-6">
      {/* TITULO E BOTÃO */}
      <div className="itens-center flex w-full justify-between">
        <h1 className="text-2xl font-bold">Transações</h1>
        <AddTransactionButton />
      </div>
      <DataTable
        columns={transactionColumns}
        data={JSON.parse(JSON.stringify(transactions))}
      />
    </div>
  );
};

export default TransactionsPage;
