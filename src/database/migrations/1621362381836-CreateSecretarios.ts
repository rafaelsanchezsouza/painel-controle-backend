import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateSecretarios1621362381836 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'secretarios',
        columns: [
          {
            name: 'nomeBase',
            type: 'varchar',
            isPrimary: true,
          },
          {
            name: 'nome',
            type: 'varchar',
          },
          {
            name: 'email',
            type: 'varchar',
          },
          {
            name: 'telefone',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'nomeBase',
            columnNames: ['nomeBase'],
            referencedTableName: 'portais',
            referencedColumnNames: ['nomeBase'],
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('secretarios');
  }
}
