import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateImages1622141214125 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'imagensAtivos',
        columns: [
          {
            name: 'id',
            type: 'integer',
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'path',
            type: 'varchar',
          },
          {
            name: 'ativo_id',
            type: 'integer',
          },
        ],
        foreignKeys: [
          {
            name: 'imagemAtivo',
            columnNames: ['ativo_id'],
            referencedTableName: 'ativos',
            referencedColumnNames: ['id'],
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('imagensAtivos');
  }
}
