import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreatePortais1621019494914 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'portais',
        columns: [
          {
            name: 'cnpj',
            type: 'varchar',
            isPrimary: true,
          },
          {
            name: 'nomeBase',
            type: 'varchar',
          },
          {
            name: 'nomenclatura',
            type: 'varchar',
          },
          {
            name: 'vencimento',
            type: 'varchar',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('portais');
  }
}
